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
const Images_1 = require("../../entity/Images");
class CreateImages {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(Images_1.Images)
                .values([
                {
                    post: 1,
                    address: '이미지주소1',
                },
                {
                    post: 2,
                    address: '이미지주소2',
                },
                {
                    post: 2,
                    address: '이미지주소3',
                },
                {
                    post: 3,
                    address: '이미지주소4',
                },
                {
                    post: 1,
                    address: '이미지주소5',
                },
            ])
                .execute();
        });
    }
}
exports.default = CreateImages;
