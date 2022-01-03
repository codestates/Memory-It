import { Request, Response, NextFunction } from 'express'

export const posting = (req: Request, res: Response, next: NextFunction) => {
  console.log('게시글 작성 요청')
  res.end('게시글 작성 요청')
}
