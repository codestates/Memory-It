import { Response } from 'express'
import { createAccessToken, createRefreshToken } from '../../../xhzms/xhzms'
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../../../hardWord'
import { cookieOptions } from './cookieOptions'

export const sendTokens = (res: Response, id: number, username?: string) => {
  const accessToken = createAccessToken(id)
  const refreshToken = createRefreshToken(id)
  res.cookie(ACCESS_TOKEN, accessToken, cookieOptions)
  res.cookie(REFRESH_TOKEN, refreshToken, {
    ...cookieOptions,
    expires: new Date(Date.now() + 7 * 12 * 60 * 60000),
  })
}
