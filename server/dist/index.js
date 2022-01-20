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
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const Posts_1 = require("./entity/Posts");
const Users_1 = require("./entity/Users");
require('dotenv').config();
// 더미데이터 변수 불러와서 반복문으로 돌리면 데이터 생성될듯
// relation 되어있는 컬럼은 변수로 불러와야한다???? post 보면 userId 라고 뜨긴하는데...
// 변수로 불러오고 싶지않으면 엔티텐
// 데이터베이스 연결해서 데이터베이스 crud 하기
const host = process.env.RDS_DATABASE_HOST;
const port = process.env.RDS_DATABASE_PORT;
const user = process.env.RDS_DATABASE_USER;
const pwd = process.env.RDS_DATABASE_PASSWORD;
// {
//   type: 'mysql',
//   host: host,
//   port: port,
//   username: user,
//   password: pwd,
//   database: 'memoryit',
//   synchronize: true,
//   logging: false,
//   entities: ['src/entity/**/*.ts'],
// }
(0, typeorm_1.createConnection)()
    .then((connection) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('Inserting a new user into the database...');
    const user = new Users_1.Users();
    user.username = 'Timber Saw';
    user.password = '1234';
    user.email = 'timber@code.com';
    yield connection.manager.save(user);
    console.log('Saved a new user with id: ' + user.id);
    console.log('Loading users from the database...');
    const users = yield connection.manager.find(Users_1.Users);
    console.log('Loaded users: ', users);
    console.log('Here you can setup and run express/koa/any other framework.');
    const post = new Posts_1.Posts();
    post.content = '이건뭐야';
    post.lat = '123.32423.543.';
    post.lng = '1231.3242.243';
    post.marker = 1;
    post.user = user;
    yield connection.manager.save(post);
    const posts = yield connection.manager.find(Posts_1.Posts);
    console.log('Loaded post: ', posts);
}))
    .catch(error => console.log(error));
