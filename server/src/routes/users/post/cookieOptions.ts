import { CookieOptions } from 'express'
require('dotenv').config()

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 60 * 60000),
  domain: process.env.COOKIE_OPT_DOMAIN,
  httpOnly: true,
  path: '/',
  secure: process.env.COOKIE_OPT_SECURE,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  domain: process.env.COOKIE_OPT_DOMAIN,
  httpOnly: true,
  path: '/',
  secure: process.env.COOKIE_OPT_SECURE,
  sameSite: 'lax',
}
