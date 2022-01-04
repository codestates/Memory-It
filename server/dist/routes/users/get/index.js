"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
exports.default = {
    logout(req, res, next) {
        res.send(hardWord_1.SUCCESSFULLY_LOGGED_OUT);
    },
};
