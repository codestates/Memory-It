"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
exports.default = {
    membershipWithdrawal(req, res, next) {
        res.send(hardWord_1.SUCCESSFULLY_DELETED_USERINFO);
    },
};
