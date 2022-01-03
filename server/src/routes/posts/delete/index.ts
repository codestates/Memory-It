import { Request, Response, NextFunction } from 'express'

export const deletePost = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.params.postId} 번 게시글 삭제 요청`)
  res.end(`${req.params.postId} 번 게시글 삭제 요청`)
}
