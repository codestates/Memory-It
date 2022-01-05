import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND, POST_DELETED } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Post_emotion } from '../../../entity/Post_emotion'
import { Images } from '../../../entity/Images'
import { Emotions } from '../../../entity/Emotions'
import { Users } from '../../../entity/Users'
export default {
  async deletePost(req: Request, res: Response, next: NextFunction) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    const entityManager = getManager()
    const post = await entityManager.findOne(Posts, postId)
    console.log('이거불러온 포스트임ㅎㅎ', post)

    if (!post) {
      res.status(404).send(NOT_FOUND)
    } else {
      await getManager()
        .createQueryBuilder()
        .delete()
        .from(Posts)
        .where('id=:id', { id: postId })
        .execute()

      res.send(POST_DELETED)
    }
  },
}
