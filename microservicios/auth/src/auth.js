const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const axios = require('axios');
const { SECRET } = require('./config');
// const User = require('./users');

// const serviceUser = new User();
const client = axios.default.create({
  baseURL: 'http://users:4000',
});

class Auth {
  async login(payload) {
    const { email, password } = payload;
    // const user = await serviceUser.getByEmail(email);
    const { data: user } = await client.get('/byEmail', {
      params: { email },
    });

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
    // const user = await serviceUser.create(payload);
    try {
      const { data: user } = await client.post('/', payload);
      if (user) {
        delete user.password;
        const token = this.createToken(user);
        return {
          logged: true,
          user,
          token,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        logged: false,
        message: 'Ocurrió un error',
      };
    }
  }

  validate(token) {
    try {
      const data = jwt.verify(token, SECRET);
      return {
        logged: true,
        data,
      };
    } catch ({ message }) {
      return {
        logged: false,
        message,
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
