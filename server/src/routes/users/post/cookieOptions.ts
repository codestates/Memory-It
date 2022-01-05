import { CookieOptions } from 'express'

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 5 * 60000),
  domain: 'localhost',
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  domain: 'localhost',
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}
