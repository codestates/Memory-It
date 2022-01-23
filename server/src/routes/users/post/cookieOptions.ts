import { CookieOptions } from 'express'

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 60 * 60000),
  // domain: 'memoryit.org',
  domain: 'localhost',
  httpOnly: true,
  path: '/',
  // secure: true,
  secure: false,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  // domain: 'memoryit.org',
  domain: 'localhost',
  httpOnly: true,
  path: '/',
  // secure: true,
  secure: false,
  sameSite: 'lax',
}
