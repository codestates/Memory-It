"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var users = (0, express_1.Router)();
users.get('/logout', function (req, res) {
    console.log('로그아웃 요청');
    res.end('로그아웃 요청');
});
users.post('/login', function (req, res) {
    console.log('로그인 요청');
    res.end('로그인 요청');
});
users.post('/signup', function (req, res) {
    console.log('회원가입 요청');
    res.end('회원가입 요청');
});
users.put('/', function (req, res) {
    console.log('회원정보 수정 요청');
    res.end('회원정보 수정 요청');
});
users.delete('/', function (req, res) {
    console.log('회원탈퇴 요청');
    res.end('회원탈퇴 요청');
});
exports.default = users;
//# sourceMappingURL=index.js.map