import { Request, Response, NextFunction } from 'express'
import { NOT_FOUND, POST_DELETED } from '../../../hardWord'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Post_emotion } from '../../../entity/Post_emotion'
import { Images } from '../../../entity/Images'
import { Emotions } from '../../../entity/Emotions'
export default {
  async deletePost(req: Request, res: Response, next: NextFunction) {
    const postIdQs: number = parseInt(req.params.postId)
    const postId: number = isNaN(postIdQs) ? -999 : postIdQs

    const entityManager = getManager()
    const post = await entityManager.findOne(Posts, postId)
    console.log('이거불러온 포스트임ㅎㅎ', post)

    // await getManager()
    //   .createQueryBuilder()
    //   .delete()
    //   .from(Post_emotion)
    //   .where('postid=:id', { id: postId })
    //   .execute()

    // await getManager()
    //   .createQueryBuilder()
    //   .delete()
    //   .from(Images)
    //   .where('postid=:id', { id: postId })
    //   .execute()

    await getManager()
      .createQueryBuilder()
      .delete()
      .from(Posts)
      .where('id=:id', { id: postId })
      .execute()

    // const deletion = await entityManager.delete(Posts, 1)
    // await entityManager.save(deletion)

    if (postId <= 0 || postId >= Number.MAX_SAFE_INTEGER) {
      res.status(404).send(NOT_FOUND)
    } else {
      res.send(POST_DELETED)
    }
  },
}
