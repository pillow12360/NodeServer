"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initUser = exports.User = void 0;
// models/user.ts
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.User = User;
function initUser(sequelize) {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        email: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
            unique: true,
        },
        password: {
            type: new sequelize_1.DataTypes.STRING(255),
            allowNull: false,
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
    }, {
        tableName: 'users',
        sequelize: sequelize,
    });
}
exports.initUser = initUser;
