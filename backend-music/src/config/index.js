require("dotenv").config({
  path: process.cwd() + "/src/.env",
});

const config = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  BUCKET_NAME: process.env.BUCKET_NAME,
};

module.exports = config;
