require('dotenv').config({
  path: process.cwd() + '/src/.env',
});

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
};

module.exports = config;
