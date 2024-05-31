// models/post.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './user';

export class Post extends Model {
  public id!: number;
  public userId!: number;
  public title!: string;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initPost(sequelize: Sequelize): void {
  Post.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
      },
      title: {
        type: new DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: new DataTypes.TEXT(),
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
      tableName: 'posts',
      sequelize: sequelize,
    }
  );
}
