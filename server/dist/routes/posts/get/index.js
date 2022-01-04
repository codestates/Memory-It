"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPostsFuncs_1 = __importDefault(require("./getPostsFuncs"));
const hardWord_1 = require("../../../hardWord");
exports.default = {
    getPosts(req, res, next) {
        const monthQs = parseInt(req.query.month);
        const month = isNaN(monthQs) ? 0 : monthQs;
        const boardType = req.query.type;
        if (month >= 0 && month <= 12 && (boardType === hardWord_1.DIARY || boardType === hardWord_1.MAP)) {
            if (boardType === hardWord_1.DIARY) {
                getPostsFuncs_1.default.diaryResponse(req, res, month, boardType);
            }
            else if (boardType === hardWord_1.MAP) {
                getPostsFuncs_1.default.mapResponse(req, res, month, boardType);
            }
        }
        else {
            res.status(400).send(hardWord_1.CHECK_YOUR_REQUEST);
        }
    },
    selectPost(req, res) {
        const postIdQs = parseInt(req.params.postId);
        const postId = isNaN(postIdQs) ? -999 : postIdQs;
        if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER) {
            res.send(`${postId} 번 게시글 조회 요청`);
        }
        else {
            res.status(404).send(hardWord_1.NOT_FOUND);
        }
    },
};
