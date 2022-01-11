import { Request, Response, NextFunction } from 'express'
import getPostsFuncs from './getPostsFuncs'
import {
  UNAUTHORIZED_USER,
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  CHECK_YOUR_REQUEST,
  DIARY,
  MAP,
  NOT_FOUND,
} from '../../../hardWord'
import { getManager } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Images } from '../../../entity/Images'
import { Post_emotion } from '../../../entity/Post_emotion'
import { verifyToken } from '../../../xhzms/xhzms'
import { fstat } from 'fs'
import fs from 'fs'

export default {
  async getPosts(req: Request, res: Response, next: NextFunction) {
    const monthQs: number | string = parseInt(req.query.month as string)
    const month: number | string = isNaN(monthQs)
      ? 0
      : monthQs >= 10
      ? monthQs + ''
      : '0' + monthQs
    const yearQs: number | string = parseInt(req.query.year as string)
    const year: number | string = isNaN(yearQs) ? 0 : yearQs
    const boardType = req.query.type

    const entityManager = getManager()

    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)

    if (!token) token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)

    const monthlypost = await entityManager.query(
      `select * from posts where userId=${token['id']} and createdAt Like '${year}-${month}%'`
    )
    console.log('$$$$$$$$$', monthlypost)

    if (month >= 0 && month <= 12) {
      if (boardType === DIARY) {
        res.send({ data: monthlypost })
      } else if (boardType === MAP) {
        res.send('맵 타입은 잘들어왔음')
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

    const addressList = []
    const postImageFiles = (await entityManager.find(Images, { post: postId })).map(
      ele => {
        return addressList.push(ele.address)
      }
    )

    const imageFileArr = []
    // const imageFiles = addressList.map(image => {
    //   // fs.readFile('dummy/uploads/' + image, (err, data) => {
    //   //   console.log('뭔가져온거냐???버퍼가져온거임..말그대로 읽는거..', data)
    //   //   return imageFileArr.push('dummy/uploads/' + image)
    //   // })
    //   return imageFileArr.push('dummy/uploads/' + image)
    // })

    const imageFiles = addressList.map(image => {
      return imageFileArr.push('http://localhost:8081/' + image)
    })

    const postedEmotions = await entityManager.query(
      `select * from post_emotion where postId=${postId}`
    )

    const emotionList = []
    const results = postedEmotions.map(ele => {
      return emotionList.push(ele.emotionId)
    })

    const emotion = await entityManager.find(Post_emotion, { post: postId })

    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER && post) {
      console.log('찾은포스트', post)
      return res.send({
        data: { post: { ...post, emotion: emotionList }, images: imageFileArr },
      })
    } else {
      res.status(404).send(NOT_FOUND)
    }
  },
}
