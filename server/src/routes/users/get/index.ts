import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../../../xhzms/xhzms'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  SUCCESSFULLY_LOGGED_OUT,
  UNAUTHORIZED_USER,
} from '../../../hardWord'
import { clearCookieOptions } from '../post/cookieOptions'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    const isValidToken = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)
    if (isValidToken) {
      res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
      res.clearCookie(REFRESH_TOKEN, clearCookieOptions)
      res.send(SUCCESSFULLY_LOGGED_OUT)
    } else {
      res.status(401).send(UNAUTHORIZED_USER)
    }
  },
}
