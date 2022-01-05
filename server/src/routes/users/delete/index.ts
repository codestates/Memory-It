import { Request, Response, NextFunction } from 'express'
import { ACCESS_TOKEN, SUCCESSFULLY_DELETED_USERINFO } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import { verifyToken } from '../../../xhzms/xhzms'
import { clearCookieOptions, cookieOptions } from '../post/cookieOptions'

export default {
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const accessToken = req.headers.cookie.split(';')[0].split('=')[1]
    const id = verifyToken(accessToken)['id']
    const withdrawalManager = getManager()

    await withdrawalManager.delete(Users, { id })

    res.clearCookie(ACCESS_TOKEN, clearCookieOptions)
    res.send(SUCCESSFULLY_DELETED_USERINFO)
  },
}
