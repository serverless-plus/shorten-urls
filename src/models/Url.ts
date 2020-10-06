import { Model, Column, Table, CreatedAt, UpdatedAt } from 'sequelize-typescript';

@Table
export class Url extends Model {
  @Column
  code!: string;

  @Column
  longUrl!: string;

  @Column
  shortUrl!: string;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
