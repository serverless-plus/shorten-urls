const { app } = require('./dist/app');
const { sequelize } = require('./dist/sequelize');

app.slsInitialize = async () => {
  await sequelize.sync({ force: false });
};

app.binaryTypes = ['*/*'];

module.exports = app;
