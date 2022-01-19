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
// import { getRepository, createConnection } from 'typeorm'
// import { Posts } from '../../../entity/Posts'
exports.default = {
    diaryResponse(req, res, month, type) {
        return __awaiter(this, void 0, void 0, function* () {
            if (month <= 0) {
                // createConnection().then(async connection => {
                //   const postsRepository = connection.getRepository(Posts)
                //   const posts = await postsRepository.find()
                //   console.log(posts)
                // })
                res.send('다이어리형 전체게시글 요청');
            }
            else {
                res.send(`${type}-${month} list`);
            }
        });
    },
    mapResponse(req, res, month, type) {
        if (month <= 0) {
            res.send('지도형 전체게시글 요청');
        }
        else {
            res.send(`${type}-${month} list`);
        }
    },
};
