"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPost = exports.getPosts = void 0;
const methods_1 = __importDefault(require("./methods"));
const hardWord_1 = require("../../../hardWord");
const getPosts = (req, res, next) => {
    const month = Number(req.query.month); // month= 이렇게 빈 요청일경우 0으로 처리됨.
    const boardType = req.query.type;
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
const selectPost = (req, res) => {
    const postId = parseInt(req.params.postId);
    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER) {
        console.log(`${postId} 번 게시글 조회 요청`);
        res.send(`${postId} 번 게시글 조회 요청`);
    }
    else {
        res.status(404).send('Not Found');
    }
};
exports.selectPost = selectPost;
