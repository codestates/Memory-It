import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Posts } from './entity/Posts'

import { Users } from './entity/Users'
require('dotenv').config()

const host = process.env.RDS_DATABASE_HOST
const port = process.env.RDS_DATABASE_PORT
const user = process.env.RDS_DATABASE_USER
const pwd = process.env.RDS_DATABASE_PASSWORD

createConnection()
  .then(async connection => {
    console.log('Inserting a new user into the database...')
    const user = new Users()
    user.username = 'Timber Saw'
    user.password = '1234'
    user.email = 'timber@code.com'
    await connection.manager.save(user)

    console.log('Saved a new user with id: ' + user.id)

    console.log('Loading users from the database...')
    const users = await connection.manager.find(Users)
    console.log('Loaded users: ', users)

    console.log('Here you can setup and run express/koa/any other framework.')
    const post = new Posts()
    post.content = '이건아니야 ~~~~'
    post.lat = '123.32423.543.'
    post.lng = '1231.3242.243'
    post.marker = 1
    post.user = user
    await connection.manager.save(post)
    const posts = await connection.manager.find(Posts)
    console.log('Loaded post: ', posts)
  })
  .catch(error => console.log(error))
