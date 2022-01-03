import { Request, Response, NextFunction } from 'express'
import methods from './methods'
import { DIARY, MAP } from '../../../hardWord'

export const getPosts = (req: Request, res: Response, next: NextFunction) => {
  const month = Number(req.query.month) // month= 이렇게 빈 요청일경우 0으로 처리됨.
  const boardType = req.query.type

  if (month >= 0 && month <= 12 && (boardType === DIARY || boardType === MAP)) {
    if (boardType === DIARY) {
      methods.diaryResponse(req, res, month)
    } else if (boardType === MAP) {
      methods.mapResponse(req, res, month)
    }
  } else {
    res.status(400).send('check your request')
  }
}

export const selectPost = (req: Request, res: Response) => {
  const postId = parseInt(req.params.postId)

  if (postId >= 1 && postId < Number.MAX_SAFE_INTEGER) {
    console.log(`${postId} 번 게시글 조회 요청`)
    res.send(`${postId} 번 게시글 조회 요청`)
  } else {
    res.status(404).send('Not Found')
  }
}
