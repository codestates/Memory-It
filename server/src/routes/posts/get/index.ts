import { Request, Response, NextFunction } from 'express'
import getPostsFuncs from './getPostsFuncs'
import { CHECK_YOUR_REQUEST, DIARY, MAP, NOT_FOUND } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'

export default {
  async getPosts(req: Request, res: Response, next: NextFunction) {
    const monthQs: number = parseInt(req.query.month as string)
    const month: number = isNaN(monthQs) ? 0 : monthQs
    const boardType = req.query.type
    const entityManager = getManager()
    const post = await entityManager.find(Posts)

    if (month >= 0 && month <= 12) {
      if (boardType === DIARY) {
        res.send('다이어리 타입은 잘들어왔음')
        // getPostsFuncs.diaryResponse(req, res, month, boardType)
      } else if (boardType === MAP) {
        res.send('맵 타입은 잘들어왔음')
        // getPostsFuncs.mapResponse(req, res, month, boardType)
      } else {
        res.status(400).send('invalid type')
      }
    } else {
      res.status(400).send(CHECK_YOUR_REQUEST)
    }
  },
  async selectPost(req: Request, res: Response) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs
    const entityManager = getManager()
    const post = await entityManager.findOne(Posts, postId)

    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER && post) {
      console.log('찾은포스트', post)
      res.send(`${postId} 번 게시글 조회 요청`)
    } else {
      res.status(404).send(NOT_FOUND)
    }
  },
}
