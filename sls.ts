import { app } from './src/app';
import { sequelize } from './src/sequelize';

app.slsInitialize = async () => {
  try {
    await sequelize.sync({ force: false });
  } catch (e) {
    console.log(`[DB Error]: ${e}`);
  }
};

app.binaryTypes = ['*/*'];

module.exports = app;
