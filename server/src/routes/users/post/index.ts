import { Request, Response, NextFunction } from 'express'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  CHECK_YOUR_ID_OR_PASSWORD,
  CHECK_YOUR_REQUIREMENTS,
  ITS_A_MEMBER_WHO_ALREADY_EXISTS,
  SUCCESSFULLY_LOGGED_IN,
  SUCCESSFULLY_MODIFIED,
  UNAUTHORIZED_USER,
  WELCOME_MEMORY_IT,
  PLEASE_LOGIN_FIRST,
} from '../../../hardWord'
import {
  loginValidator,
  passwordValidator,
  signupValidator,
  usernameValidator,
} from './validator'
import { sendTokens } from './sendTokens'
import { verifyToken } from '../../../xhzms/xhzms'

import bcrypt from 'bcrypt'
require('dotenv').config()

const saltRounds: Number = 10

export default {
  async login(req: Request, res: Response, next: NextFunction) {
    if (loginValidator(req.body)) {
      const { email, password } = req.body
      const loginManager = getManager()
      const isUser = await loginManager.findOne(Users, { where: { email } })
      const isPassMatched = await bcrypt.compare(password, isUser.password)

      if (isUser && isPassMatched) {
        sendTokens(res, isUser.id, isUser.username)
        res.send(SUCCESSFULLY_LOGGED_IN)
      } else {
        res.status(400).send(CHECK_YOUR_ID_OR_PASSWORD)
      }
    } else {
      res.status(400).send(CHECK_YOUR_ID_OR_PASSWORD)
    }
  },
  async signup(req: Request, res: Response, next: NextFunction) {
    if (signupValidator(req.body)) {
      const { username, email, password } = req.body
      const signupManager = getManager()
      const isAlreadyExistsUser = await signupManager.findOne(Users, { where: { email } })

      if (isAlreadyExistsUser) {
        res.status(400).send(ITS_A_MEMBER_WHO_ALREADY_EXISTS)
      } else {
        const hased = await bcrypt.hash(password, saltRounds)
        const newUser = signupManager.create(Users, { username, email, password: hased })
        // console.log('newwwwwwuser', newUser)
        const result = await signupManager.save(newUser)

        sendTokens(res, result.id, result.username)
        res.status(201).send(WELCOME_MEMORY_IT)
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
  },
  async modifyUserInfo(req: Request, res: Response, next: NextFunction) {
    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)
    // if (!token) return res.status(401).send(PLEASE_LOGIN_FIRST)
    if (!token) {
      token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
      const signupManager = getManager()
      const result = await signupManager.findOne(Users, { where: { id: token['id'] } })
      sendTokens(res, result.id, result.username)
    }
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)

    const modifyKeyUser = Object.keys(req.body)[0]
    const modifyKeyPass = Object.keys(req.body)[1]
    // const modifyValue = req.body[modifyKey]
    const modifyManager = getManager()

    const { username, password } = req.body
    console.log('유저정보', token['id'])
    if (token['id'] === 3) {
      return res.send('테스트아이디는 비밀번호를 변경할 수 없습니다.')
    } else {
      if (modifyKeyUser === 'username' && usernameValidator(username)) {
        modifyManager.update(Users, token['id'], { username: username })
      }
      if (modifyKeyPass === 'password' && passwordValidator(password)) {
        const hased = await bcrypt.hash(password, saltRounds)
        modifyManager.update(Users, token['id'], { password: hased })
      } else {
        return res.status(400).send(CHECK_YOUR_REQUIREMENTS)
      }

      res.send(SUCCESSFULLY_MODIFIED)
    }
  },
}
