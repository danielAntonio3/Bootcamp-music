require('dotenv').config({
  path: process.cwd() + '/src/.env',
});

const config = {
  PORT: process.env.PORT,
};

module.exports = config;
