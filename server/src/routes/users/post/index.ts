import { Request, Response, NextFunction } from 'express'
import {
  CHECK_YOUR_ID_OR_PASSWORD,
  CHECK_YOUR_REQUIREMENTS,
  SUCCESSFULLY_LOGGED_IN,
  WELCOME_MEMORY_IT,
} from '../../../hardWord'
import { loginValidator, signupValidator } from './validator'

export default {
  login(req: Request, res: Response, next: NextFunction) {
    if (loginValidator(req.body)) {
      res.send(SUCCESSFULLY_LOGGED_IN)
    } else {
      res.status(400).send(CHECK_YOUR_ID_OR_PASSWORD)
    }
  },
  signup(req: Request, res: Response, next: NextFunction) {
    if (signupValidator(req.body)) {
      res.status(201).send(WELCOME_MEMORY_IT)
    } else {
      res.status(400).send(CHECK_YOUR_REQUIREMENTS)
    }
  },
}
