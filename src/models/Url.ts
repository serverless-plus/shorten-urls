import { Sequelize, Model, DataTypes, Optional } from 'sequelize';

interface UrlAttributes {
  id: number;
  code: string;
  longUrl: string;
  baseUrl: string;
  shortUrl: string;
}

type UrlCreationAttributes = Optional<UrlAttributes, 'id'>;

export class Url extends Model<UrlAttributes, UrlCreationAttributes> implements UrlAttributes {
  public id!: number;

  public code!: string;

  public longUrl!: string;

  public baseUrl!: string;

  public shortUrl!: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

const initUrl = (sequelize: Sequelize): void => {
  Url.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      code: {
        type: new DataTypes.STRING(32),
      },
      longUrl: {
        type: new DataTypes.STRING(512),
      },
      baseUrl: {
        type: new DataTypes.STRING(64),
      },
      shortUrl: {
        type: new DataTypes.STRING(128),
      },
    },
    {
      sequelize,
      tableName: 'Urls',
    },
  );
};

export { initUrl };
