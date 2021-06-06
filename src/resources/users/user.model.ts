import { v4 as uuid } from 'uuid';

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
    this.password = password;
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
