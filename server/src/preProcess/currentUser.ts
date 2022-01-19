import { Request, Response, NextFunction } from 'express'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../hardWord'
import { createAccessToken, verifyToken } from '../xhzms/xhzms'

const currentUser = (req: Request, res: Response, next: NextFunction) => {
  console.log('여길 무조건 거처감')

  const acc: string = req.cookies.accessToken
  const ref: string = req.cookies.refreshToken
  if (acc) {
    next('route')
  } else {
    console.log('엑세스 토큰이없다면 여길 거처감')

    const refreshToken = verifyToken(REFRESH_TOKEN, ref)
    if (ref && refreshToken) {
      console.log('만약 리프레시 토큰이 있다면 여길 거처감')

      const accessToken = createAccessToken(refreshToken['id'])
      res.cookie(ACCESS_TOKEN, accessToken)

      return next('route')
    }

    console.log('로그인전 인듯: 엑세스, 리프레시 둘다없음.')
    next()
  }
}

export default currentUser
