"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.getUser = exports.createUser = exports.getAllUsers = void 0;
const user_1 = require("../models/user");
const getAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield user_1.User.findAll();
        res.json(users);
    }
    catch (error) {
        // TypeScript 4.0 이상에서 'unknown' 타입 대신 'any' 사용
        res.status(500).send(error.message);
    }
});
exports.getAllUsers = getAllUsers;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
});
exports.createUser = createUser;
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield user_1.User.findByPk(req.params.id);
        if (user) {
            res.json(user);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.getUser = getUser;
const updateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updated = yield user_1.User.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedUser = yield user_1.User.findByPk(req.params.id);
            res.json(updatedUser);
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.updateUser = updateUser;
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleted = yield user_1.User.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).send('User deleted');
        }
        else {
            res.status(404).send('User not found');
        }
    }
    catch (error) {
        res.status(500).send(error.message);
    }
});
exports.deleteUser = deleteUser;
