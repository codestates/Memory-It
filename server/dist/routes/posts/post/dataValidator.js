"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataValidator = void 0;
const hardWord_1 = require("../../../hardWord");
const dataValidator = (data) => {
    for (let k in data) {
        if (k === hardWord_1.CONTENT)
            continue;
        else if (!data[k].length)
            return false;
    }
    return true;
};
exports.dataValidator = dataValidator;
