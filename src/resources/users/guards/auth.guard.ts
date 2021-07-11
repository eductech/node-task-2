import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  ForbiddenException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';

import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../../../common/config';
import { UsersService } from '../users.service';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly usersService: UsersService,
    private readonly reflector: Reflector,
    private readonly configService: ConfigService
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    const req: Request = context.switchToHttp().getRequest();

    if (req.method === 'OPTIONS') {
      return true;
    }

    // eslint-disable-next-line dot-notation
    const authHeader = req.headers['authorization'];

    if (typeof authHeader !== 'string' || !authHeader) {
      throw new UnauthorizedException();
    }

    const sessionToken = authHeader && authHeader.split(' ')[1];

    if (!sessionToken) {
      throw new UnauthorizedException();
    }

    try {
      const payload = jwt.verify(
        sessionToken,
        this.configService.get<string>(JWT_SECRET_KEY)
      );

      const user = await this.usersService.getById(payload['userId'] as string);

      if (!user) {
        throw new ForbiddenException();
      }

      return true;
    } catch {
      throw new UnauthorizedException();
    }
  }
}
