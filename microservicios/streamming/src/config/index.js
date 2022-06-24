require("dotenv").config({
  path: "./src/.env",
});

const config = {
  PORT: process.env.PORT,
  BUCKET_NAME: process.env.BUCKET_NAME,
};

module.exports = config;
