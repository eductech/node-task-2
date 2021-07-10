import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcryptjs';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>
  ) {}

  async onApplicationBootstrap(): Promise<void> {
    const user = await this.getByLogin('admin');

    if (!user) {
      await this.create({ login: 'admin', password: 'admin', name: 'admin' });
    }
  }

  async create(createUserDto: CreateUserDto) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...user } = await this.usersRepository.save({
      ...createUserDto,
      password: bcrypt.hashSync(createUserDto.password, 10),
    });
    return { ...user };
  }

  getAll() {
    return this.usersRepository.find();
  }

  getById(id: string) {
    return this.usersRepository.findOne(id);
  }

  getByLogin(login: string) {
    return this.usersRepository.findOne({ where: { login } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  remove(id: string) {
    return this.usersRepository.delete(id);
  }
}
