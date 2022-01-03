"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const posts_1 = __importDefault(require("./posts"));
const users_1 = __importDefault(require("./users"));
const routers = express_1.default.Router();
routers.get('/', (req, res) => {
    res.location('/posts?type=diary&month=0').status(302).send('hello');
});
routers.use('/posts', posts_1.default);
routers.use('/users', users_1.default);
exports.default = routers;
