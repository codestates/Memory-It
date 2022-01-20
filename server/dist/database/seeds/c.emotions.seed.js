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
const Emotions_1 = require("../../entity/Emotions");
class CreateImages {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(Emotions_1.Emotions)
                .values([
                {
                    name: '노란색',
                },
                {
                    name: '초록색',
                },
                {
                    name: '빨간색',
                },
                {
                    name: '파란색',
                },
                {
                    name: '보라색',
                },
            ])
                .execute();
        });
    }
}
exports.default = CreateImages;
