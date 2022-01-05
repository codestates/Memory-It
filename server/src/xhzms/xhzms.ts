import fs = require('fs')
import path = require('path')
import jwt = require('jsonwebtoken')
import dotenv = require('dotenv')
dotenv.config()

const p = path.resolve(__dirname, '../../jwtRS256.key')
const SECRET = fs.readFileSync(p)

export const createAccessToken = (id: number) => {
  return jwt.sign({ id }, SECRET, {
    algorithm: 'RS256',
    expiresIn: '5m',
    issuer: 'jaeha',
  })
}

export const createRefreshToken = (id: number) => {
  return jwt.sign({ id }, SECRET, {
    algorithm: 'RS256',
    expiresIn: '7d',
    issuer: 'jaeha',
  })
}

export const verifyToken = (token: string) => {
  return jwt.verify(token, SECRET, { algorithms: ['RS256'] })
}
