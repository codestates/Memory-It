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
import { getManager, createQueryBuilder, getRepository } from 'typeorm'
import { Posts } from '../../../entity/Posts'
import { Images } from '../../../entity/Images'
import { Post_emotion } from '../../../entity/Post_emotion'
import { verifyToken } from '../../../xhzms/xhzms'
import { fstat } from 'fs'
import fs from 'fs'
import { Users } from '../../../entity/Users'

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

    const posts = await getRepository(Users)
      .createQueryBuilder('user')
      .select([
        'post.id AS id',
        'post.content AS content',
        'post.lat AS lat',
        'post.lng AS lng',
        'post.marker AS marker',
        'post.createdAt AS createdAt',
      ])
      .leftJoin('user.posts', 'post')
      .where('user.id = :userId', {
        userId: token['id'],
      })
      .andWhere('post.createdAt like :createdAt', { createdAt: `%${year}-${month}%` })
      .getRawMany()
      .catch()

    const images = await Promise.all(
      posts.map(v => {
        return getRepository(Images)
          .createQueryBuilder('image')
          .select('image.address AS images')
          .where('image.postId = :postId', { postId: v.id })
          .getRawOne()
          .catch()
      })
    )
    images.forEach((v, idx) => {
      posts[idx].images = 'http://172.30.1.11:8081/' + v.images
    })

    const emotions = await Promise.all(
      posts.map(v => {
        return getRepository(Posts)
          .createQueryBuilder('post')
          .select('emotions.emotionId AS emotionId')
          .leftJoin('post.post_emotion', 'emotions')
          .where('post.id = :postId', { postId: v.id })
          .getRawMany()
          .catch()
      })
    )

    emotions.forEach((ids, idx) => {
      posts[idx].emotions = ids.map(id => id.emotionId)
    })

    res.json({ data: posts })
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

    const imageFiles = addressList.map(image => {
      return imageFileArr.push('http://172.30.1.11:8081/' + image)
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
      return res.send({
        data: {
          post: { ...post, emotion: emotionList, images: imageFileArr },
          images: imageFileArr,
        },
      })
    } else {
      res.status(404).send(NOT_FOUND)
    }
  },
}
