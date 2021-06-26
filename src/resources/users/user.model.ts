import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs';

class User {
  id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = bcrypt.hashSync(password, 10);
  }

  static fromRequest(data: User) {
    return new User(data);
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static toDb(user: User) {
    const { id, name, login, password } = user;
    return { id, name, login, password };
  }
}

export default User;
