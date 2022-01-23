require('dotenv').config();

module.exports = {
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_DIALECT: process.env.DB_DIALECT,

  HOST: process.env.HOST,
  PORT: process.env.PORT,

  NODE_ENV: process.env.NODE_ENV
}