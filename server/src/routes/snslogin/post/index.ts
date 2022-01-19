import { Request, Response, NextFunction } from 'express'
import { getManager, createQueryBuilder, getRepository } from 'typeorm'
import { Users } from '../../../entity/Users'
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
import { sendTokens } from '../../users/post/sendTokens'
import { verifyToken } from '../../../xhzms/xhzms'

require('dotenv').config()
const naverClientSecrete = process.env.NAVER__CLIENT_SECRET

//다 서버쪽에서 엑세스토근 받아오게
// 서버쪽에서 액세스토근 정보 받아서 클라이언트에 내려주고 그거로 다시 그거로 엑시오스 요쳥보내서 유져정보 가져오게한 다음
// 네이버나 카카오에서 가져온 유져 정보가 우리쪽에 있으면 그 정보 가지고 jwt 토큰 내려주고 없으면 우리쪽 데이터 베이스에 저장한다음
// 그정보로 jwt 토근 내려주면됨 ㅎㅎ
//

export default {
  async gettoken(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body)
    if (!req.body.stateCode) {
      const params = new URLSearchParams()
      params.append('grant_type', 'authorization_code')
      params.append('client_id', '7a15a8d44b88c4a6cc057ca28ad75307')
      params.append('redirect_uri', 'http://172.30.1.11:3000/login')
      params.append('code', req.body.authorizationCode)

      await axios
        .post('https://kauth.kakao.com/oauth/token', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
          },
        })
        .then(result => {
          // setGtiAccessToken(res.data.accessToken)
          // window.localStorage.setItem('accessToken', res.data.accessToken)
          // getGithudInfo(res.data.accessToken)
          //   console.log('카카오토큰', result.data)
          const { access_token, refresh_token, expires_in, refresh_token_expires_in } =
            result.data
          res.cookie('kakaoaccesstoken', access_token, expires_in)
          res.cookie('kakaorefreshtoken', refresh_token, refresh_token_expires_in)
          res.send(result.data)
        })
        .catch(err => {
          //   console.log(err)
          res.send(err)
        })
    } else if (req.body.stateCode) {
      const params = new URLSearchParams()
      params.append('grant_type', 'authorization_code')
      params.append('client_id', 'OKsFngbElDmndKGDCWWQ')
      params.append('client_secret', 'sAdfJw9iGf')
      params.append('code', req.body.authorizationCode)
      params.append('state', req.body.stateCode)
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
          //   console.log('네이버토큰', result.data)
          const { access_token, refresh_token, expires_in } = result.data
          res.cookie('naveraccesstoken', access_token, expires_in)
          res.cookie('naverrefreshtoken', refresh_token, expires_in)
          res.send(result.data)
        })
        .catch(err => {
          //   console.log(err)
          res.send(err)
        })
      // console.log('req.body')
      // res.send('응답이다')
    }
  },
  async userInfo(req: Request, res: Response, next: NextFunction) {
    // console.log('뭐라도 나와라 좀', req.cookies)
    const entityManager = getManager()

    const { naveraccesstoken, kakaoaccesstoken } = req.cookies
    if (kakaoaccesstoken) {
      const recievedUserInfo = await axios.get('https://kapi.kakao.com/v2/user/me ', {
        headers: { Authorization: `Bearer ${kakaoaccesstoken}` },
      })

      // console.log(recievedUserInfo.data)

      const { profile, email } = recievedUserInfo.data.kakao_account
      const { nickname } = profile

      //   console.log(id, nickname, email)
      const userByName = await entityManager.findOne(Users, {
        where: { username: nickname },
      })
      // console.log(userByName)
      const userByEmail = await entityManager.findOne(Users, { where: { email: email } })
      // console.log(userByEmail)
      if (userByName && userByName['email'] === email) {
        // 토근내려주자
        // 여기 어떻게 처리해야되는지 고민이네
        sendTokens(res, userByName['id'], userByName['username'])
        res.send('sns login success')
      } else if (userByEmail) {
        // 토근내려주자
        // 여기 어떻게 처리해야되는지 고민이네
        sendTokens(res, userByEmail['id'], userByEmail['username'])
        res.send('sns login success')
      } else if (!userByName && !userByEmail) {
        const newUser = entityManager.create(Users, {
          username: nickname,
          email: email,
          password: kakaoaccesstoken,
        })
        // console.log(newUser)
        await entityManager.save(newUser)
        const addedUser = await entityManager.findOne(Users, {
          where: { password: kakaoaccesstoken },
        })
        // console.log(addedUser)
        const { id, username } = addedUser
        sendTokens(res, id, username)
        res.send('sns singup success')
      }

      //Promise { <pending> } 오류
      // Promise { <pending> } 오류
      // .then(result => {
      //   console.log(result.data)
      //   const id = result.data.id
      //   const { profile, email } = result.data.kakao_account
      //   const { nickname } = profile
      //   console.log(id, nickname, email)
      //   const userById = entityManager.findOne(Users, { where: { id, email } })
      //   console.log(userById)
      //   const userByEmail = entityManager.findOne(Users, { where: { email: email } })
      //   console.log(userByEmail)
      //   if ((userById && userById['email'] === email) || userByEmail) {
      //   } else if (!userById && !userByEmail) {
      //     const newUser = entityManager.create(Users, {
      //       username: nickname,
      //       email: email,
      //     })
      //     entityManager.save(newUser)
      //   }
      // })
    } else if (naveraccesstoken) {
      const recievedUserInfo = await axios.get('https://openapi.naver.com/v1/nid/me', {
        headers: { Authorization: `Bearer ${naveraccesstoken}` },
      })

      // console.log(recievedUserInfo.data)
      const { email, name } = recievedUserInfo.data.response

      const userByEmail = await entityManager.findOne(Users, { where: { email: email } })
      // console.log(userByEmail)
      if (userByEmail) {
        const { id, username } = userByEmail
        sendTokens(res, id, username)
        res.send('sns login success')
      } else if (!userByEmail) {
        const newUser = entityManager.create(Users, {
          username: name,
          email: email,
          password: naveraccesstoken,
        })
        // console.log('새로운유져', newUser)
        await entityManager.save(newUser)
        const addedUser = await entityManager.findOne(Users, {
          where: { email: email },
        })
        // console.log(addedUser)
        const { id, username } = addedUser
        sendTokens(res, id, username)
        res.send('sns singup success')
      }
    } else {
      res.send('소셜로그인에 실패하셨습니다. 회원가입을 해주세요')
    }
  },
}
