import { Router } from 'express'
const users = Router()

users.get('/logout', (req, res) => {
  console.log('로그아웃 요청')
  res.end('로그아웃 요청')
})

users.post('/login', (req, res) => {
  console.log('로그인 요청')
  res.end('로그인 요청')
})

users.post('/signup', (req, res) => {
  console.log('회원가입 요청')
  res.end('회원가입 요청')
})

users.put('/', (req, res) => {
  console.log('회원정보 수정 요청')
  res.end('회원정보 수정 요청')
})

users.delete('/', (req, res) => {
  console.log('회원탈퇴 요청')
  res.end('회원탈퇴 요청')
})

export default users
