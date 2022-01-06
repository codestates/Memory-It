import { Router } from 'express'
import usersGet from './get/index'
import usersPost from './post/index'
import usersDelete from './delete/index'

const users = Router()

users.get('/logout', usersGet.logout)

users.post('/login', usersPost.login)

users.post('/signup', usersPost.signup)

// users.put('/', usersPost.modifyUserInfo)
users.post('/modifyUserInfo', usersPost.modifyUserInfo)

users.delete('/', usersDelete.deleteUser)

export default users
