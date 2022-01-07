import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND, POST_DELETED } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Post_emotion } from '../../../entity/Post_emotion'
import { Images } from '../../../entity/Images'
import { Emotions } from '../../../entity/Emotions'
import { Users } from '../../../entity/Users'
import fs from 'fs'
export default {
  async deletePost(req: Request, res: Response, next: NextFunction) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    const entityManager = getManager()
    const post = await entityManager.findOne(Posts, postId)
    console.log('이거불러온 포스트임ㅎㅎ', post)

    const imageFileName = await entityManager.find(Images, { post: postId })
    console.log('삭제될이미지', imageFileName)
    // const imageStorage = fs.unlink()

    if (!post) {
      res.status(404).send(NOT_FOUND)
    } else {
      await entityManager.delete(Posts, postId)

      res.send(POST_DELETED)
    }
  },
}
