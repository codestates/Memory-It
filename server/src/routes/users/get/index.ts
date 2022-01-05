import { Request, Response, NextFunction } from 'express'
import { ACCESS_TOKEN, SUCCESSFULLY_LOGGED_OUT } from '../../../hardWord'
import { cookieOptions } from '../post'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    // res.clearCookie(ACCESS_TOKEN, cookieOptions)
    res.clearCookie(ACCESS_TOKEN)
    res.send(SUCCESSFULLY_LOGGED_OUT)
  },
}
