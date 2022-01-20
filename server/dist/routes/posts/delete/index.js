"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const hardWord_1 = require("../../../hardWord");
exports.default = {
    deletePost(req, res, next) {
        const postIdQs = parseInt(req.params.postId);
        const postId = isNaN(postIdQs) ? -999 : postIdQs;
        if (postId <= 0 || postId >= Number.MAX_SAFE_INTEGER) {
            res.status(404).send(hardWord_1.NOT_FOUND);
        }
        else {
            res.send(hardWord_1.POST_DELETED);
        }
    },
};
