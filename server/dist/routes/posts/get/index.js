"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPost = exports.getPosts = void 0;
var methods_1 = require("./methods");
var hardWord_1 = require("../../../hardWord");
var getPosts = function (req, res, next) {
    var month = Number(req.query.month); // month= 이렇게 빈 요청일경우 0으로 처리됨.
    var boardType = req.query.type;
    if (month >= 0 && month <= 12 && (boardType === hardWord_1.DIARY || boardType === hardWord_1.MAP)) {
        if (boardType === hardWord_1.DIARY) {
            methods_1.default.diaryResponse(req, res, month);
        }
        else if (boardType === hardWord_1.MAP) {
            methods_1.default.mapResponse(req, res, month);
        }
    }
    else {
        res.status(400).send('check your request');
    }
};
exports.getPosts = getPosts;
var selectPost = function (req, res) {
    var postId = parseInt(req.params.postId);
    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER) {
        console.log("".concat(postId, " \uBC88 \uAC8C\uC2DC\uAE00 \uC870\uD68C \uC694\uCCAD"));
        res.send("".concat(postId, " \uBC88 \uAC8C\uC2DC\uAE00 \uC870\uD68C \uC694\uCCAD"));
    }
    else {
        res.status(404).send('Not Found');
    }
};
exports.selectPost = selectPost;
//# sourceMappingURL=index.js.map