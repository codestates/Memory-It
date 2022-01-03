"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    diaryResponse(req, res, month) {
        if (month <= 0) {
            res.send('다이어리형 전체게시글 요청');
        }
        else {
            res.send(`${month}월 게시글 요청`);
        }
    },
    mapResponse(req, res, month) {
        if (month <= 0) {
            res.send('지도형 전체게시글 요청');
        }
        else {
            res.send(`${month}월 게시글 요청`);
        }
    },
};
