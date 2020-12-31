const username = process.env.DB_NAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;
const host = process.env.DB_HOST;
const nodeEnv = process.env.NODE_ENV;

const config = {
  development: {
    username,
    password,
    database,
    host,
  },
  test: {},
  production: {
    username,
    password,
    database,
    host,
  },
};

module.exports = config[nodeEnv];
