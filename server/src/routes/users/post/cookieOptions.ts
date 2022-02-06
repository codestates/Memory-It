import { CookieOptions } from 'express'
import dotenv from 'dotenv'
dotenv.config()

export const cookieOptions: CookieOptions = {
  expires: new Date(Date.now() + 60 * 60000),
  domain: process.env.COOKIE_DOMAIN,
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}

export const clearCookieOptions: CookieOptions = {
  domain: process.env.COOKIE_DOMAIN,
  httpOnly: true,
  path: '/',
  secure: false,
  sameSite: 'lax',
}
