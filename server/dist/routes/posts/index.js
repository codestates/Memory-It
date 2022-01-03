"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var index_1 = require("./get/index");
var index_2 = require("./post/index");
var index_3 = require("./delete/index");
var posts = (0, express_1.Router)();
posts.get('/', index_1.getPosts);
posts.get('/:postId', index_1.selectPost);
posts.post('/', index_2.posting);
posts.delete('/:postId', index_3.deletePost);
exports.default = posts;
//# sourceMappingURL=index.js.map