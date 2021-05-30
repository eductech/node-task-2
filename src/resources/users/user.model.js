const { v4: uuid } = require('uuid');

class User {
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

  static fromRequest(data) {
    return new User(data);
  }

  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  static toDb(user) {
    const { id, name, login, password } = user;
    return { id, name, login, password };
  }
}

module.exports = User;
