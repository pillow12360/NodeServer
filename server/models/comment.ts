// models/comment.ts
import { Model, DataTypes, Sequelize } from 'sequelize';
import { User } from './user';
import { Post } from './post';

export class Comment extends Model {
  public id!: number;
  public postId!: number;
  public userId!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function initComment(sequelize: Sequelize): void {
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      postId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'posts',
          key: 'id',
        },
      },
      userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: 'users',
          key: 'id',
        },
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
      tableName: 'comments',
      sequelize: sequelize,
    }
  );
}
