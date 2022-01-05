import { Request, Response, NextFunction } from 'express'
import { ACCESS_TOKEN, SUCCESSFULLY_LOGGED_OUT } from '../../../hardWord'
import { clearCookieOptions } from '../post/cookieOptions'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
    res.send(SUCCESSFULLY_LOGGED_OUT)
  },
}
