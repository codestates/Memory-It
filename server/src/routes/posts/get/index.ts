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
import { verifyToken } from '../../../xhzms/xhzms'

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

    const { username, password } = req.body
    let token = verifyToken(ACCESS_TOKEN, req.cookies.accessToken)

    if (!token) token = verifyToken(REFRESH_TOKEN, req.cookies.refreshToken)
    if (!token) return res.status(401).send(UNAUTHORIZED_USER)
    //select date_format(createdat, "%2022") from posts where userId=1;
    //select date_format(createdat, "%2022-01") from posts where userId=1;
    //select * from posts where createdAt Like '2021%';
    // console.log('토큰해독', token['id'])
    // console.log('먼스', month)
    // console.log('년도', year)
    // const post = await entityManager.find(Posts, { user: 1 })
    const monthlypost = await entityManager.query(
      `select * from posts where userId=1 and createdAt Like '${year}-${month}%'`
    )

    /*
      // await getManager()s
      //   .createQueryBuilder()
      //   .select(*)
      //   .from(Posts)
      //   .where('id=:id', { id: postId })
      //   .execute()
    */
    console.log('$$$$$$$', monthlypost)
    // console.log('토큰으로 불러온 포스트', post)
    if (month >= 0 && month <= 12) {
      if (boardType === DIARY) {
        res.send({ data: monthlypost })
        //유져아이디랑 특정 달에 맞는 정보 보여준다
        // getPostsFuncs.diaryResponse(req, res, month, boardType)
      } else if (boardType === MAP) {
        res.send('맵 타입은 잘들어왔음')
        // getPostsFuncs.mapResponse(req, res, month, boardType)
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

    if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER && post) {
      console.log('찾은포스트', post)
      // res.send(`${postId} 번 게시글 조회 요청`)
      res.send({ data: { post: post } })
    } else {
      res.status(404).send(NOT_FOUND)
    }
  },
}
