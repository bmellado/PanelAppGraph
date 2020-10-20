const app = require('./app');
const orm = require('../sequelize/models');
const router = require('./routes');

const PORT = process.env.DB_PORT || 8080;

app.use('/api', router);

const assertDatabaseConnection = async () => {
  console.log('Checking database connection...');
  try {
    await orm.authenticate();
    await orm.sync();
    console.log('Database connection OK!');
  } catch (error) {
    console.log('Unable to connect to the database:');
    console.log(error.message);
    process.exit(1);
  }
};

const initializeApp = async () => {
  await assertDatabaseConnection();
  console.log(`Starting Sequelize + Express on port ${PORT}...`);
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
};

initializeApp();
