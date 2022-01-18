import { Router } from 'express'
import sns from './post/index'

const snslogin = Router()

snslogin.post('/gettoken', sns.gettoken)
snslogin.get('/getuserinfo', sns.userInfo)

// users.put('/', usersPost.modifyUserInfo)

export default snslogin
