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
import { Post_emotion } from '../../../entity/Post_emotion'
import { Images } from '../../../entity/Images'
type PostingBody = {
  content: string
  lat: string
  lng: string
  marker: number
  emotion: number
  address: string
}

export default {
  async posting(req: Request, res: Response, next: NextFunction) {
    const data: PostingBody = req.body.data
    const { content, lat, lng, marker, emotion, address } = data
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
      const result = await entityManager.save(newPost)
      const newJoinTable = entityManager.create(Post_emotion, {
        post: result['id'],
        emotion: emotion,
      })
      const result2 = await entityManager.save(newJoinTable)
      const newImage = entityManager.create(Images, {
        address,
        post: result['id'],
      })
      const result3 = await entityManager.save(newImage)

      res.send(POST_ADDED)
    }
  },
}
