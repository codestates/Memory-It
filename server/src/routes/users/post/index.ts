import { Request, Response, NextFunction } from 'express'
import {
  CHECK_YOUR_ID_OR_PASSWORD,
  SUCCESSFULLY_LOGGED_IN,
  WELCOME_MEMORY_IT,
} from '../../../hardWord'
import { loginValidator } from './loginValidator'

export default {
  login(req: Request, res: Response, next: NextFunction) {
    // console.log('결과느??', loginValidator(req.body))
    if (loginValidator(req.body)) {
      res.send(SUCCESSFULLY_LOGGED_IN)
    } else {
      res.status(400).send(CHECK_YOUR_ID_OR_PASSWORD)
    }
  },
  signup(req: Request, res: Response, next: NextFunction) {
    res.status(201).send(WELCOME_MEMORY_IT)
  },
}
