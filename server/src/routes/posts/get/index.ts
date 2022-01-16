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

    // const monthlypost = await entityManager.query(
    //   `select posts.id from posts where userId=${token['id']} and createdAt Like '${year}-${month}%'`
    // )
    // console.log(monthlypost)

    // const monthlypost2 = await entityManager
    //   .createQueryBuilder()
    //   .select('posts.content')
    //   .addSelect('posts.id')
    //   .from(Posts, 'posts')
    //   .where('posts.userId=:userId', { userId: token['id'] })
    //   .andWhere('posts.createdAt like :createdAt', { createdAt: `${year}-${month}%` })
    //   .getMany()

    // console.log('쿼리비럳사용', monthlypost2)

    // const monthlypost3 = await entityManager
    //   .createQueryBuilder()
    //   .select('posts.content')
    //   .addSelect('posts.id')
    //   .from(Posts, 'posts')
    //   .where('posts.userId=:userId', { userId: token['id'] })
    //   .andWhere('posts.createdAt like :createdAt', { createdAt: `${year}-${month}%` })
    //   .getMany()

    // console.log('쿼리비럳사용', monthlypost3)

    // const postIdList = []
    // monthlypost.map(post => {
    //   return postIdList.push(post.id)
    // })

    //  ***************

    const posts = await getRepository(Users)
      .createQueryBuilder('user')
      .select([
        // 'user.id AS id',
        'post.id AS id',
        'post.content AS content',
        'post.lat AS lat',
        'post.lng AS lng',
        'post.marker AS marker',
        'post.createdAt AS createdAt',
        // 'images.address AS image',
        // 'emotions.id AS emotion',
      ])
      .leftJoin('user.posts', 'post')
      // .leftJoin('post.image', 'images')
      // .leftJoin('post.post_emotion', 'emotions')
      .where('user.id = :userId', {
        userId: token['id'],
      })
      .andWhere('post.createdAt like :createdAt', { createdAt: `%${year}-${month}%` })
      .getRawMany()
      .catch()

    // console.log(posts)

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
    // console.log(images)
    images.forEach((v, idx) => {
      posts[idx].images = 'http://localhost:8081/' + v.images
    })

    console.log(posts)

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
    console.log(emotions)
    emotions.forEach((ids, idx) => {
      posts[idx].emotions = ids.map(id => id.emotionId)
    })

    // console.log(posts)
    res.json({ data: posts })

    //  ***************

    // const addressList = []
    // const test01 = await Promise.all(
    //   postIdList.map(postId => {
    //     const image = entityManager.findOne(Images, { post: postId })
    //     return image
    //   })
    // )

    // const test02 = test01.map(ele => {
    //   return addressList.push(ele.address)
    // })

    // const imageFileArr = []
    // const imageFiles = addressList.map(image => {
    //   return imageFileArr.push('http://localhost:8081/' + image)
    // })

    // console.log('이미지이름리스트', addressList)
    // console.log('이미지파일리스트', imageFileArr)
    // console.log('먼슬리포스트들', monthlypost)
    // 가공 여러번 거쳐서 합치는 위에 과정들을 조인으로 해결할수있지 않을까????? left join inner join 살푭ㅎㄱ!!!!

    // const test03 = await Promise.all(
    //   postIdList.map(postId => {
    //     const postemotion = entityManager.query(
    //       `select * from post_emotion where postId=${postId}`
    //     )
    //     return postemotion
    //   })
    // )

    // const emotionList = []
    // let arr01 = []
    // const results = test03.map(ele1 => {
    //   if (ele1.length > 1) {
    //     ele1.map(ele => {
    //       arr01.push(ele.emotionId)
    //       return arr01
    //     })
    //     emotionList.push(arr01)
    //     return emotionList
    //   } else if (ele1.length === 1) {
    //     ele1.map(ele => {
    //       emotionList.push([ele.emotionId])
    //       return emotionList
    //     })
    //   }
    // })

    // const results = test03.map(ele1 => {
    //   if (ele1.length > 1) {
    //     ele1.map(ele => {
    //       arr01.push(ele.emotionId)
    //       return arr01
    //     })
    //     emotionList.push(arr01)
    //     return emotionList
    //   } else if (ele1.length === 1) {
    //     ele1.map(ele => {
    //       emotionList.push([ele.emotionId])
    //       return emotionList
    //     })
    //   }
    // })
    // console.log('각포스트별이모션리스트', emotionList)

    // const processedData = []
    // const combinedData = () => {
    //   for (let i = 0; i < monthlypost.length; i++) {
    //     // console.log('&&&&&&&&&', emotionList[i])
    //     // console.log('^^^^^^', imageFileArr[i])
    //     // console.log('%%%%%%%%%', monthlypost[i])
    //     const preprocessedData = {
    //       ...monthlypost[i],
    //       emotion: emotionList[i],
    //       images: imageFileArr[i],
    //     }
    //     processedData.push(preprocessedData)
    //   }
    // }

    // combinedData()
    // console.log('처리된 데이터', processedData)

    // if (month >= 0 && month <= 12) {
    //   if (boardType === DIARY) {
    //     res.send({ data: processedData })
    //   } else if (boardType === MAP) {
    //     res.send('맵 타입은 잘들어왔음')
    //   } else {
    //     res.status(400).send('invalid type')
    //   }
    // } else {
    //   res.status(400).send(CHECK_YOUR_REQUEST)
    // }
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
