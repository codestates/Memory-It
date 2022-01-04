import { Request, Response, NextFunction } from 'express'
import { SUCCESSFULLY_DELETED_USERINFO } from '../../../hardWord'

export default {
  membershipWithdrawal(req: Request, res: Response, next: NextFunction) {
    res.send(SUCCESSFULLY_DELETED_USERINFO)
  },
}
