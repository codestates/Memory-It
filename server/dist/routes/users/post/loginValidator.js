"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginValidator = void 0;
const regexr_1 = require("../regexr");
const emailValidator = (email) => {
    return regexr_1.emailRegExp.test(email);
};
const pwValidator = (pw) => {
    if (pw.length <= 7 || pw.length >= 13)
        return false;
    return regexr_1.passwordRegExp.test(pw);
};
const loginValidator = (loginData) => {
    if (emailValidator(loginData.email) && pwValidator(loginData.password))
        return true;
    return false;
};
exports.loginValidator = loginValidator;
