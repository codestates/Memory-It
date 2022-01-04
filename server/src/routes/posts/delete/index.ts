import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND, POST_DELETED } from '../../../hardWord'

export default {
  deletePost(req: Request, res: Response, next: NextFunction) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    if (postId <= 0 || postId >= Number.MAX_SAFE_INTEGER) {
      res.status(404).send(NOT_FOUND)
    } else {
      res.send(POST_DELETED)
    }
  },
}
