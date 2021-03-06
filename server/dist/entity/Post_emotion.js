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
exports.Post_emotion = void 0;
const typeorm_1 = require("typeorm");
const Emotions_1 = require("./Emotions");
const Posts_1 = require("./Posts");
let Post_emotion = class Post_emotion {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Post_emotion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Posts_1.Posts, post => post.post_emotion),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Object)
], Post_emotion.prototype, "post", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => Emotions_1.Emotions, emotion => emotion.post_emotion),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Object)
], Post_emotion.prototype, "emotion", void 0);
Post_emotion = __decorate([
    (0, typeorm_1.Entity)()
], Post_emotion);
exports.Post_emotion = Post_emotion;
