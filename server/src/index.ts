import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Posts } from './entity/Posts'

import { Users } from './entity/Users'
require('dotenv').config()

// 더미데이터 변수 불러와서 반복문으로 돌리면 데이터 생성될듯
// relation 되어있는 컬럼은 변수로 불러와야한다???? post 보면 userId 라고 뜨긴하는데...
// 변수로 불러오고 싶지않으면 엔티텐

// 데이터베이스 연결해서 데이터베이스 crud 하기

const host = process.env.RDS_DATABASE_HOST
const port = process.env.RDS_DATABASE_PORT
const user = process.env.RDS_DATABASE_USER
const pwd = process.env.RDS_DATABASE_PASSWORD

// {
//   type: 'mysql',
//   host: host,
//   port: port,
//   username: user,
//   password: pwd,
//   database: 'memoryit',
//   synchronize: true,
//   logging: false,
//   entities: ['src/entity/**/*.ts'],
// }

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
    post.content = '이건뭐야'
    post.lat = '123.32423.543.'
    post.lng = '1231.3242.243'
    post.marker = 1
    post.user = user
    await connection.manager.save(post)
    const posts = await connection.manager.find(Posts)
    console.log('Loaded post: ', posts)
  })
  .catch(error => console.log(error))
