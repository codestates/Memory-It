import { Request, Response, NextFunction } from 'express'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  SUCCESSFULLY_DELETED_USERINFO,
  UNAUTHORIZED_USER,
} from '../../../hardWord'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import { verifyToken } from '../../../xhzms/xhzms'
import { clearCookieOptions } from '../post/cookieOptions'

export default {
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const isValidToken = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)
    if (isValidToken) {
      const withdrawalManager = getManager()
      const result = await withdrawalManager.delete(Users, { id: isValidToken['id'] })

      res.clearCookie(REFRESH_TOKEN, clearCookieOptions)
      res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
      res.send(SUCCESSFULLY_DELETED_USERINFO)
    } else {
      res.status(401).send(UNAUTHORIZED_USER)
    }
  },
}
