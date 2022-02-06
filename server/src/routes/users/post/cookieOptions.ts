import { CookieOptions } from 'express'

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 60 * 60000),
  domain: 'memoryit.org',
  httpOnly: true,
  path: '/',
  secure: true,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  domain: 'memoryit.org',
  httpOnly: true,
  path: '/',
  secure: true,
  sameSite: 'lax',
}
