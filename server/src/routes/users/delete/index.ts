import { Request, Response, NextFunction } from 'express'
import { SUCCESSFULLY_DELETED_USERINFO } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Users } from '../../../entity/Users'

export default {
  async deleteUser(req: Request, res: Response, next: NextFunction) {
    const withdrawalManager = getManager()
    // withdrawalManager.find(Users, { where: { }})

    res.send(SUCCESSFULLY_DELETED_USERINFO)
  },
}
