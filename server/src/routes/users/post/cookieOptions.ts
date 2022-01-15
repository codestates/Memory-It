import { CookieOptions } from 'express'

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 60 * 60000),
  domain: '172.30.1.51',
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  domain: '172.30.1.51',
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}
