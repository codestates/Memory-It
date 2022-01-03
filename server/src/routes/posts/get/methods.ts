import { Request, Response, NextFunction } from 'express'

export default {
  diaryResponse(req: Request, res: Response, month: Number) {
    if (month <= 0) {
      res.send('다이어리형 전체게시글 요청')
    } else {
      res.send(`${month}월 게시글 요청`)
    }
  },
  mapResponse(req: Request, res: Response, month: Number) {
    if (month <= 0) {
      res.send('지도형 전체게시글 요청')
    } else {
      res.send(`${month}월 게시글 요청`)
    }
  },
}
