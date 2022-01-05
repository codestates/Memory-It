import { Request, Response, NextFunction } from 'express'
import getPostsFuncs from './getPostsFuncs'
import { CHECK_YOUR_REQUEST, DIARY, MAP, NOT_FOUND } from '../../../hardWord'

export default {
  async getPosts(req: Request, res: Response, next: NextFunction) {
    const monthQs: number = parseInt(req.query.month as string)
    const month: number = isNaN(monthQs) ? 0 : monthQs
    const boardType = req.query.type

    if (month >= 0 && month <= 12 && (boardType === DIARY || boardType === MAP)) {
      if (boardType === DIARY) {
        getPostsFuncs.diaryResponse(req, res, month, boardType)
      } else if (boardType === MAP) {
        getPostsFuncs.mapResponse(req, res, month, boardType)
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUEST)
    }
  },
  selectPost(req: Request, res: Response) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER) {
      res.send(`${postId} 번 게시글 조회 요청`)
    } else {
      res.status(404).send(NOT_FOUND)
    }
  },
}
