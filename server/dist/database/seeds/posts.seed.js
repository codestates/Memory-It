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
const Posts_1 = require("../../entity/Posts");
class CreatePosts {
    run(factory, connection) {
        return __awaiter(this, void 0, void 0, function* () {
            yield connection
                .createQueryBuilder()
                .insert()
                .into(Posts_1.Posts)
                .values([
                {
                    user: 1,
                    content: '오늘도 날씨가 좋네',
                    marker: 1,
                    lat: '11.22.33',
                    lng: '11.22.44',
                },
                {
                    user: 2,
                    content: '오늘도 날씨가 별로네',
                    marker: 2,
                    lat: '11.22.33',
                    lng: '11.22.44',
                },
                {
                    user: 3,
                    content: '오늘도 날씨가 soso',
                    marker: 2,
                    lat: '11.22.33',
                    lng: '11.22.44',
                },
                {
                    user: 1,
                    content: '오늘도 날씨가 wonderful',
                    marker: 1,
                    lat: '11.22.33',
                    lng: '11.22.44',
                },
            ])
                .execute();
        });
    }
}
exports.default = CreatePosts;
