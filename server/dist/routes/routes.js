"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var posts_1 = require("./posts");
var users_1 = require("./users");
var routers = express_1.default.Router();
routers.get('/', function (req, res) {
    res.location('/posts?type=diary&month=0').status(302).send('hello');
});
routers.use('/posts', posts_1.default);
routers.use('/users', users_1.default);
exports.default = routers;
//# sourceMappingURL=routes.js.map