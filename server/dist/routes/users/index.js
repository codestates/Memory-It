"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const get_1 = __importDefault(require("./get"));
const post_1 = __importDefault(require("./post"));
const put_1 = __importDefault(require("./put"));
const delete_1 = __importDefault(require("./delete"));
const users = (0, express_1.Router)();
users.get('/logout', get_1.default.logout);
users.post('/login', post_1.default.login);
users.post('/signup', post_1.default.signup);
users.put('/', put_1.default.changeUserInfo);
users.delete('/', delete_1.default.membershipWithdrawal);
exports.default = users;
