"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    diaryResponse: function (req, res, month) {
        if (month <= 0) {
            res.send('다이어리형 전체게시글 요청');
        }
        else {
            res.send("".concat(month, "\uC6D4 \uAC8C\uC2DC\uAE00 \uC694\uCCAD"));
        }
    },
    mapResponse: function (req, res, month) {
        if (month <= 0) {
            res.send('지도형 전체게시글 요청');
        }
        else {
            res.send("".concat(month, "\uC6D4 \uAC8C\uC2DC\uAE00 \uC694\uCCAD"));
        }
    },
};
//# sourceMappingURL=methods.js.map