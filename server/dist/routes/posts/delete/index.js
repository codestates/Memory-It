"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = void 0;
const deletePost = (req, res, next) => {
    console.log(`${req.params.postId} 번 게시글 삭제 요청`);
    res.end(`${req.params.postId} 번 게시글 삭제 요청`);
};
exports.deletePost = deletePost;
