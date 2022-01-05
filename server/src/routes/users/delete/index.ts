import { Request, Response, NextFunction } from 'express'
import { ACCESS_TOKEN, SUCCESSFULLY_DELETED_USERINFO } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'
import { cookieOptions } from '../post'

export default {
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const withdrawalManager = getManager()
    // withdrawalManager.find(Users, { where: { }})
    res.clearCookie(ACCESS_TOKEN, cookieOptions)
    res.send(SUCCESSFULLY_DELETED_USERINFO)
  },
}
