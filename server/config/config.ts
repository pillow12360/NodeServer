require('dotenv').config(); // 환경 변수 로드

module.exports = {
  development: {
    username: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'nodeserver',
    host: process.env.DB_HOST || '127.0.0.1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: '1234',
    database: 'nodeserver',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
  },
};
