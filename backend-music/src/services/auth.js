const User = require('./users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { SECRET } = require('./../config');

const serviceUser = new User();
class Auth {
  async login(payload) {
    const { email, password } = payload;
    const user = await serviceUser.getByEmail(email);
    // console.log(user);

    if (user && this.compare(password, user.password)) {
      delete user.password;
      const token = this.createToken(user);
      return {
        logged: true,
        data: user,
        token,
      };
    }
    return {
      logged: false,
      message: 'Credentials are not valid',
    };
  }

  async signUp(payload) {
    payload.password = await this.encrypt(payload.password);
    const user = await serviceUser.create(payload);

    if (user) {
      delete user.password;
      const token = this.createToken(user);
      return {
        logged: true,
        user,
        token,
      };
    }
  }

  createToken(payload) {
    return jwt.sign(payload, SECRET, {
      expiresIn: '7d',
    });
  }

  async encrypt(password) {
    const salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  }

  async compare(password, hash) {
    return await bcrypt.compare(password, hash);
  }
}

module.exports = Auth;
