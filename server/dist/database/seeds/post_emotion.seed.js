"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_emotion_1 = require("../../entity/Post_emotion");
class CreatePostEmotion {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(Post_emotion_1.Post_emotion)
                .values([
                {
                    post: 1,
                    emotion: 1,
                },
                {
                    post: 1,
                    emotion: 3,
                },
                {
                    post: 2,
                    emotion: 1,
                },
                {
                    post: 3,
                    emotion: 2,
                },
                {
                    post: 3,
                    emotion: 4,
                },
                {
                    post: 4,
                    emotion: 5,
                },
            ])
                .execute();
        });
    }
}
exports.default = CreatePostEmotion;
