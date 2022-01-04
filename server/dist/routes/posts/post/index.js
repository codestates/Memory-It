"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
const dataValidator_1 = require("./dataValidator");
exports.default = {
    posting(req, res, next) {
        const data = JSON.parse(req.body.data);
        if (!(0, dataValidator_1.dataValidator)(data)) {
            res.status(400).send(hardWord_1.CHECK_YOUR_REQUIRES);
        }
        else {
            res.send(hardWord_1.POST_ADDED);
        }
    },
};
