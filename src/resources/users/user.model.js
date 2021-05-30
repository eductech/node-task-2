const { v4: uuid } = require('uuid');

/**
 * @typedef {Object} SafeUserData
 * @property {string} login - user login.
 * @property {string} name - user name.
 * @property {string} id - user id.
 */

/**
 * Class representing a user.
 */
class User {
  /**
   * Create a user.
   * @param {string} id - unique instance id.
   * @param {string} name - user name.
   * @param {string} login - user login.
   * @param {string} password - user password.
   */
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

  /**
   * Convert request payload to user object.
   * @param {object} data - Object payload that represents task input from client.
   * @return {User} A User object.
   */
  static fromRequest(data) {
    return new User(data);
  }

  /**
   * Convert user instance to object that could be used as response payload.
   * @param {User} user - User instance.
   * @return {SafeUserData} user info without sensitive data.
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }

  /**
   * Convert user instance to object that could be stored in db.
   * @param {User} task - User instance.
   * @return {User} User instance.
   */
  static toDb(user) {
    return user;
  }
}

module.exports = User;
