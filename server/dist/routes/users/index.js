"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./get/index"));
const index_2 = __importDefault(require("./post/index"));
const index_3 = __importDefault(require("./put/index"));
const index_4 = __importDefault(require("./delete/index"));
const users = (0, express_1.Router)();
users.get('/logout', index_1.default.logout);
users.post('/login', index_2.default.login);
users.post('/signup', index_2.default.signup);
users.put('/', index_3.default.changeUserInfo);
users.delete('/', index_4.default.membershipWithdrawal);
exports.default = users;
