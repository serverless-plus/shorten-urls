import { Sequelize } from 'sequelize-typescript';
import { Url } from './models/Url';

export const sequelize = new Sequelize({
  dialect: 'postgres',
  models: [Url],
  host: (process.env.DB_HOST as string) || '127.0.0.1',
  port: Number(process.env.DB_PORT || 5432),
  database: process.env.DB_NAME as string,
  username: process.env.DB_USER as string,
  password: process.env.DB_PASSWORD as string,
});
