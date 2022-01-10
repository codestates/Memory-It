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
  content: string | undefined
  lat: number
  lng: number
  marker: number
  emotion: number[]
}
import upload from './multer'

export default {
  async posting(req: Request, res: Response, next: NextFunction) {
    const imageData = req.files['postingImages']
    const imageFile = imageData.map(image => {
      return image.filename
    })

    console.log('$$$', imageFile)

    const data: PostingBody = JSON.parse(req.body.data)
    // const data = req.body.data
    console.log(data)
    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)
    if (!token) token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)

    const entityManager = getManager()

    if (!dataValidator(data)) {
      res.status(400).send(CHECK_YOUR_REQUIRES)
    } else {
      const { content, lat, lng, marker, emotion } = data
      const newPost = entityManager.create(Posts, {
        content,
        lat,
        lng,
        marker,
        user: token['id'],
      })
      const result = await entityManager.save(newPost)

      const emotionAddes = await emotion.map(emotion => {
        const newJoinTable = entityManager.create(Post_emotion, {
          post: result['id'],
          emotion: emotion,
        })
        const result2 = entityManager.save(newJoinTable)
      })
      const imageAdded = await imageFile.map(address => {
        const newImage = entityManager.create(Images, {
          address,
          post: result['id'],
        })
        const result3 = entityManager.save(newImage)
      })

      res.send(POST_ADDED)
    }
  },
}
