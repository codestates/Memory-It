import { Request, Response, NextFunction } from 'express'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import {
  CHECK_YOUR_ID_OR_PASSWORD,
  CHECK_YOUR_REQUIREMENTS,
  ITS_A_MEMBER_WHO_ALREADY_EXISTS,
  SUCCESSFULLY_LOGGED_IN,
  WELCOME_MEMORY_IT,
} from '../../../hardWord'
import { loginValidator, signupValidator } from './validator'

export default {
  async login(req: Request, res: Response, next: NextFunction) {
    if (loginValidator(req.body)) {
      const loginManager = getManager()
      const { email, password } = req.body
      const isUser = await loginManager.findOne(Users, { where: { email, password } })

      if (isUser) {
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
      const signupManager = getManager()
      const { username, email, password } = req.body
      const isAlreadyExistsUser = await signupManager.findOne(Users, { where: { email } })

      if (isAlreadyExistsUser) {
        res.status(400).send(ITS_A_MEMBER_WHO_ALREADY_EXISTS)
      } else {
        const newUser = signupManager.create(Users, { username, email, password })
        await signupManager.save(newUser)
        res.status(201).send(WELCOME_MEMORY_IT)
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
  },
}
