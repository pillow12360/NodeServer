// models/user.ts
import { Model, DataTypes, Sequelize } from 'sequelize';

export class User extends Model {
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initUser(sequelize: Sequelize): void {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      email: {
        type: new DataTypes.STRING(255),
        allowNull: false,
        unique: true,
      },
      password: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      tableName: 'users',
      sequelize: sequelize,
    }
  );
}
