import { Request, Response, NextFunction } from 'express'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  UNAUTHORIZED_USER,
  CHECK_YOUR_REQUIRES,
  POST_ADDED,
} from '../../../hardWord'
import { dataValidator } from './dataValidator'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { verifyToken } from '../../../xhzms/xhzms'
import { Post_emotion } from 'src/entity/Post_emotion'

// type PostingBody = {
//   content: string
//   lat: string
//   lng: string
//   marker: number
//   emotion: number
// }

export default {
  posting(req: Request, res: Response, next: NextFunction) {
    const data = req.body.data
    const { content, lat, lng, marker, emotion } = data
    console.log('데이터데이터', req.body.data)
    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)
    if (!token) token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)
    console.log('토큰해독', token['id'])
    const entityManager = getManager()

    if (!dataValidator(data)) {
      res.status(400).send(CHECK_YOUR_REQUIRES)
    } else {
      const newPost = entityManager.create(Posts, {
        content,
        lat,
        lng,
        marker,
        user: token['id'],
      })
      // console.log('*********', newPost.id)
      const result = entityManager.save(newPost)
      // const newJoinTable= entityManager.create(Post_emotion,{
      //   emotion: emotion
      // })
      // const result2 = entityManager.save(newJoinTable)
      res.send(POST_ADDED)
    }
  },
}
