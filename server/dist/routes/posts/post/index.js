"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.posting = void 0;
const posting = (req, res, next) => {
    console.log('게시글 작성 요청');
    res.end('게시글 작성 요청');
};
exports.posting = posting;
