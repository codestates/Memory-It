"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordRegExp = exports.emailRegExp = void 0;
exports.emailRegExp = /^([_]?[0-9a-zA-Z]+[_]?[0-9a-zA-z]+)@[a-z]+.[a-z]+$/i;
exports.passwordRegExp = /^([0-9a-zA-Z]+[!@#$%^&*()]+[0-9a-zA-Z!@#$%^&*()]*)|([!@#$%^&*()]+[0-9a-zA-Z]+[0-9a-zA-Z!@#$%^&*()]*)$/i;
