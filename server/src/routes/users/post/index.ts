import { Request, Response, NextFunction, CookieOptions } from 'express'
import { mkToken } from '../../../xhzms/xhzms'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import {
  ACCESS_TOKEN,
  CHECK_YOUR_ID_OR_PASSWORD,
  CHECK_YOUR_REQUIREMENTS,
  ITS_A_MEMBER_WHO_ALREADY_EXISTS,
  SUCCESSFULLY_LOGGED_IN,
  WELCOME_MEMORY_IT,
} from '../../../hardWord'
import { loginValidator, signupValidator } from './validator'

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 5 * 60000),
  domain: 'localhost',
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}

export default {
  async login(req: Request, res: Response, next: NextFunction) {
    if (loginValidator(req.body)) {
      const { email, password } = req.body

      const loginManager = getManager()
      const isUser = await loginManager.findOne(Users, { where: { email, password } })

      if (isUser) {
        const accessToken = mkToken(isUser.id)
        res.cookie(ACCESS_TOKEN, accessToken, cookieOptions)
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
        const accessToken = mkToken(result.id)

        res.cookie(ACCESS_TOKEN, accessToken, cookieOptions)
        res.status(201).send(WELCOME_MEMORY_IT)
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
  },
}
