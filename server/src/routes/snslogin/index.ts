import { Router } from 'express'
import naver from './post/index'

const snslogin = Router()

snslogin.post('/gettoken', naver.gettoken)

// users.put('/', usersPost.modifyUserInfo)

export default snslogin
