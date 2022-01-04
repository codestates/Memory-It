import { Request, Response, NextFunction } from 'express'
import { SUCCESSFULLY_FIXED } from '../../../hardWord'

export default {
  changeUserInfo(req: Request, res: Response, next: NextFunction) {
    res.send(SUCCESSFULLY_FIXED)
  },
}
