import { Request, Response, NextFunction } from 'express'
import axios from 'axios'
import {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  CHECK_YOUR_ID_OR_PASSWORD,
  CHECK_YOUR_REQUIREMENTS,
  ITS_A_MEMBER_WHO_ALREADY_EXISTS,
  SUCCESSFULLY_LOGGED_IN,
  SUCCESSFULLY_MODIFIED,
  UNAUTHORIZED_USER,
  WELCOME_MEMORY_IT,
  PLEASE_LOGIN_FIRST,
} from '../../../hardWord'
require('dotenv').config()
const naverClientSecrete = process.env.NAVER__CLIENT_SECRET

export default {
  async gettoken(req: Request, res: Response, next: NextFunction) {
    console.log(req.body)
    const params = new URLSearchParams()
    params.append('grant_type', 'authorization_code')
    params.append('client_id', 'OKsFngbElDmndKGDCWWQ')
    params.append('client_secret', 'sAdfJw9iGf')
    params.append('code', req.body.authorizationCode)
    params.append('state', req.body.stateCode)
    console.log('&&&&&&&&###########7')
    await axios
      .post('https://nid.naver.com/oauth2.0/token', params, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      })
      .then(result => {
        // setGtiAccessToken(res.data.accessToken)
        // window.localStorage.setItem('accessToken', res.data.accessToken)
        // getGithudInfo(res.data.accessToken)
        console.log(result.data)
        res.send(result.data)
      })
      .catch(err => {
        console.log(err)
      })
    // console.log('req.body')
    // res.send('응답이다')
  },
}
