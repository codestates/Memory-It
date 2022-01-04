import { Request, Response, NextFunction } from 'express'

export default {
  diaryResponse(req: Request, res: Response, month: number, type: string) {
    if (month <= 0) {
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
