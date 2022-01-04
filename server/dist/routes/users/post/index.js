"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
const loginValidator_1 = require("./loginValidator");
exports.default = {
    login(req, res, next) {
        // console.log('결과느??', loginValidator(req.body))
        if ((0, loginValidator_1.loginValidator)(req.body)) {
            res.send(hardWord_1.SUCCESSFULLY_LOGGED_IN);
        }
        else {
            res.status(400).send(hardWord_1.CHECK_YOUR_ID_OR_PASSWORD);
        }
    },
    signup(req, res, next) {
        res.status(201).send(hardWord_1.WELCOME_MEMORY_IT);
    },
};
