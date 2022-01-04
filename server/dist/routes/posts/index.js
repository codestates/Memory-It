"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const index_1 = __importDefault(require("./get/index"));
const index_2 = __importDefault(require("./post/index"));
const index_3 = __importDefault(require("./delete/index"));
const multer_1 = __importDefault(require("./post/multer"));
const posts = (0, express_1.Router)();
posts.get('/', index_1.default.getPosts);
posts.get('/:postId', index_1.default.selectPost);
posts.post('/', multer_1.default, index_2.default.posting);
posts.delete('/:postId', index_3.default.deletePost);
exports.default = posts;
