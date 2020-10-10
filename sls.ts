import { app } from './src/app';
import { sequelize } from './src/sequelize';

app.slsInitialize = async () => {
  await sequelize.sync({ force: false });
};

app.binaryTypes = ['*/*'];

module.exports = app;
