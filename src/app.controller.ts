import {
  Controller,
  Get,
  Post,
  Body,
  ForbiddenException,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken';
import { AppService } from './app.service';
import { Public } from './resources/users/decorators/public.decorator';
import { UsersService } from './resources/users/users.service';
import { LoginDto } from './resources/users/dto/login.dto';
import { JWT_SECRET_KEY } from './common/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly usersService: UsersService
  ) {}

  @Public()
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Public()
  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    const user = await this.usersService.getByLogin(loginDto.login);

    if (!user) {
      throw new ForbiddenException();
    } else {
      const matches = bcrypt.compareSync(loginDto.password, user.password);
      if (matches) {
        const token = jwt.sign(
          { userId: user.id, login: user.login },
          JWT_SECRET_KEY as string,
          { expiresIn: 60 * 60 * 24 }
        );

        return {
          message: 'Successfully authenticated.',
          token,
        };
      } else {
        throw new ForbiddenException();
      }
    }
  }
}
