import { Request, Response, NextFunction } from 'express'
import {
  ACCESS_TOKEN,
  PLEASE_LOGIN_FIRST,
  REFRESH_TOKEN,
  SUCCESSFULLY_LOGGED_OUT,
  KAKAO_ACCESS_TOKEN,
  NAVER_ACCESS_TOKEN,
} from '../../../hardWord'
import { clearCookieOptions } from '../post/cookieOptions'

export default {
  logout(req: Request, res: Response, next: NextFunction) {
    if (
      req.cookies.accessToken ||
      req.cookies.refreshToken ||
      req.cookies.kakaoaccesstoken ||
      req.cookies.naveraccesstoken
    ) {
      res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
      res.clearCookie(REFRESH_TOKEN, clearCookieOptions)
      res.clearCookie(KAKAO_ACCESS_TOKEN)
      res.clearCookie(NAVER_ACCESS_TOKEN)
      res.clearCookie('naverrefreshtoken')
      res.clearCookie('kakaorefreshtoken')
      res.send(SUCCESSFULLY_LOGGED_OUT)
    } else {
      res.status(401).send(PLEASE_LOGIN_FIRST)
    }
  },
}
