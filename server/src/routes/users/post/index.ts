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
} from '../../../hardWord'
import {
  loginValidator,
  passwordValidator,
  signupValidator,
  usernameValidator,
} from './validator'
import { sendTokens } from './sendTokens'
import { verifyToken } from '../../../xhzms/xhzms'

export default {
  async login(req: Request, res: Response, next: NextFunction) {
    if (loginValidator(req.body)) {
      const { email, password } = req.body
      const loginManager = getManager()
      const isUser = await loginManager.findOne(Users, { where: { email, password } })
      console.log(isUser)
      if (isUser) {
        sendTokens(res, isUser.id)
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
        const newUser = signupManager.create(Users, { username, email, password })
        const result = await signupManager.save(newUser)

        sendTokens(res, result.id)
        res.status(201).send(WELCOME_MEMORY_IT)
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
  },
  async modifyUserInfo(req: Request, res: Response, next: NextFunction) {
    const { username, password } = req.body
    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)

    if (!token) token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)

    const modifyManager = getManager()

    if (username && usernameValidator(username)) {
      modifyManager.update(Users, token['id'], { username })
    } else if (password && passwordValidator(password)) {
      modifyManager.update(Users, token['id'], { password })
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
    res.send(SUCCESSFULLY_MODIFIED)
  },
}
