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

// type PostingBody = {
//   content: string
//   lat: string
//   lng: string
//   marker: number
// }

export default {
  posting(req: Request, res: Response, next: NextFunction) {
    const data = req.body.data
    const { content, lat, lng, marker } = data
    console.log(req.body.data)
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
      const result = entityManager.save(newPost)
      console.log('!!!!1', result)
      res.send(POST_ADDED)
    }
  },
}
