import 'reflect-metadata'
import { createConnection } from 'typeorm'
import { Posts } from './entity/Posts'

import { Users } from './entity/Users'
require('dotenv').config()

import express = require('express')
import cors = require('cors')
import morgan = require('morgan')
import routes from './routes/routes'

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
    const app = express()
    const PORT = 8081

    app.use(cors())
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(morgan('dev'))

    app.use('/', routes)

    app.listen(PORT, () => {
      console.log(PORT, ' port start')
    })
  })
  .catch(error => console.log(error))
