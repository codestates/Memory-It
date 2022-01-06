import fs = require('fs')
import path = require('path')
import jwt = require('jsonwebtoken')
import dotenv = require('dotenv')
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../src/hardWord'
dotenv.config()

const accessPath = path.resolve(__dirname, '../../jwtRS256.key')
const refreshPath = path.resolve(__dirname, '../../jwtRS256refresh.key')
const SECRET = fs.readFileSync(accessPath)
const SECRET_REFRESH = fs.readFileSync(refreshPath)

export const createAccessToken = (id: number) => {
  return jwt.sign({ id }, SECRET, {
    algorithm: 'RS256',
    expiresIn: '1h',
    issuer: 'jaeha',
  })
}

export const createRefreshToken = (id: number) => {
  return jwt.sign({ id }, SECRET_REFRESH, {
    algorithm: 'RS256',
    expiresIn: '7d',
    issuer: 'jaeha',
  })
}

export const verifyToken = (tokenKey: string, tokenValue: string) => {
  if (!tokenValue) return false

  try {
    if (tokenKey === ACCESS_TOKEN)
      return jwt.verify(tokenValue, SECRET, { algorithms: ['RS256'] })
    if (tokenKey === REFRESH_TOKEN)
      return jwt.verify(tokenValue, SECRET_REFRESH, { algorithms: ['RS256'] })
  } catch {
    return false
  }
}
