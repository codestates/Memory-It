import { Router } from 'express'
import usersGet from './get'
import usersPost from './post'
import usersPut from './put'
import usersDelete from './delete'

const users = Router()

users.get('/logout', usersGet.logout)

users.post('/login', usersPost.login)

users.post('/signup', usersPost.signup)

users.put('/', usersPut.changeUserInfo)

users.delete('/', usersDelete.membershipWithdrawal)

export default users
