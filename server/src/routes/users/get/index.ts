import { Request, Response, NextFunction } from 'express'
import {
  ACCESS_TOKEN,
  PLEASE_LOGIN_FIRST,
  REFRESH_TOKEN,
  SUCCESSFULLY_LOGGED_OUT,
} from '../../../hardWord'
import { clearCookieOptions } from '../post/cookieOptions'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    if (req.cookies.accessToken) {
      res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
      res.clearCookie(REFRESH_TOKEN, clearCookieOptions)
      res.send(SUCCESSFULLY_LOGGED_OUT)
    } else {
      res.status(401).send(PLEASE_LOGIN_FIRST)
    }
  },
}
