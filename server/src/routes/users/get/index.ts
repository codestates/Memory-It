import { Request, Response, NextFunction } from 'express'
import { SUCCESSFULLY_LOGGED_OUT } from '../../../hardWord'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    res.send(SUCCESSFULLY_LOGGED_OUT)
  },
}
