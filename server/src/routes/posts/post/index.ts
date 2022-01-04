import { Request, Response, NextFunction } from 'express'
import { CHECK_YOUR_REQUIRES, POST_ADDED } from '../../../hardWord'
import { dataValidator } from './dataValidator'

type PostingBody = {
  content: string
  emotions: string[]
  lat: string
  lng: string
}

export default {
  posting(req: Request, res: Response, next: NextFunction) {
    const data: PostingBody = JSON.parse(req.body.data)

    if (!dataValidator(data)) {
      res.status(400).send(CHECK_YOUR_REQUIRES)
    } else {
      res.send(POST_ADDED)
    }
  },
}
