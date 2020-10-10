import { Sequelize } from 'sequelize';
import { initUrl } from './models/Url';

const sequelize = new Sequelize({
  logging: process.env.NODE_ENV === 'development',
  dialect: 'postgres',
  host: (process.env.DB_HOST as string) || '127.0.0.1',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
});

initUrl(sequelize);

export { sequelize };
