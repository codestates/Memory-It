"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Posts = void 0;
const typeorm_1 = require("typeorm");
const Users_1 = require("./Users");
const Images_1 = require("./Images");
const Post_emotion_1 = require("./Post_emotion");
let Posts = class Posts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Posts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Users_1.Users, users => users.posts)
    // @OneToOne(type => Users)
    // @JoinColumn 워너십에 관한것 한쪽만 가질수있다
    // @relation(type=>연결해줄테이블, 테이블간바이디렉션널관계만들어주기-관계에따라서 .단수 나 . 복수가 될수있다??)
    // typeorm 에서는 타입이 중요하므로 필요한 타입 정보를 넣어줘야한다
    ,
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Object)
], Posts.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Posts.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Posts.prototype, "marker", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Images_1.Images, images => images.post),
    __metadata("design:type", Images_1.Images)
], Posts.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(type => Post_emotion_1.Post_emotion, post_emotion => post_emotion.post),
    __metadata("design:type", Post_emotion_1.Post_emotion)
], Posts.prototype, "post_emotion", void 0);
Posts = __decorate([
    (0, typeorm_1.Entity)()
], Posts);
exports.Posts = Posts;
