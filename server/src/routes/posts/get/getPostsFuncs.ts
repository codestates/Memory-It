import { Request, Response, NextFunction } from 'express'
// import { getRepository, createConnection } from 'typeorm'
// import { Posts } from '../../../entity/Posts'

export default {
  async diaryResponse(req: Request, res: Response, month: number, type: string) {
    if (month <= 0) {
      // createConnection().then(async connection => {
      //   const postsRepository = connection.getRepository(Posts)
      //   const posts = await postsRepository.find()
      //   console.log(posts)
      // })
      res.send('다이어리형 전체게시글 요청')
    } else {
      res.send(`${type}-${month} list`)
    }
  },
  mapResponse(req: Request, res: Response, month: number, type: string) {
    if (month <= 0) {
      res.send('지도형 전체게시글 요청')
    } else {
      res.send(`${type}-${month} list`)
    }
  },
}
