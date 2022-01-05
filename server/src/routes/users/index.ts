import { Router } from 'express'
import usersGet from './get/index'
import usersPost from './post/index'
import usersPut from './put/index'
import usersDelete from './delete/index'

const users = Router()

users.get('/logout', usersGet.logout)

users.post('/login', usersPost.login)

users.post('/signup', usersPost.signup)

users.put('/', usersPut.changeUserInfo)

users.delete('/', usersDelete.deleteUser)

export default users
