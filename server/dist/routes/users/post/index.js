"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
const validator_1 = require("./validator");
exports.default = {
    login(req, res, next) {
        if ((0, validator_1.loginValidator)(req.body)) {
            res.send(hardWord_1.SUCCESSFULLY_LOGGED_IN);
        }
        else {
            res.status(400).send(hardWord_1.CHECK_YOUR_ID_OR_PASSWORD);
        }
    },
    signup(req, res, next) {
        if ((0, validator_1.signupValidator)(req.body)) {
            res.status(201).send(hardWord_1.WELCOME_MEMORY_IT);
        }
        else {
            res.status(400).send(hardWord_1.CHECK_YOUR_REQUIREMENTS);
        }
    },
};
