import 'reflect-metadata'
import { createConnection } from 'typeorm'
import cookieParser = require('cookie-parser')
import express = require('express')
import cors = require('cors')
import morgan = require('morgan')

import 'reflect-metadata'
require('dotenv').config()

import routes from './routes/routes'
import currentUser from './preProcess/currentUser'
import beforeLogin from './preProcess/beforeLogin'

const PORT = 8081
createConnection().then(async connection => {
  const app = express()
  app.use(
    cors({
      credentials: true,
      origin: [process.env.CLIENT_ADDRESS],
    })
  )
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))

  app.use(express.static(__dirname + '/uploads'))
  // console.log('어디경로임?', __dirname)
  // 어디경로임? /home/dh/Desktop/34/final project/Memory-It/server/src

  // app.use(
  //   express.static('/home/dh/Desktop/34/final project/Memory-It/server/uploads')
  // )

  app.get('/', currentUser, beforeLogin)
  // app.post('/posts', currentUser, beforeLogin)
  app.use('/', routes)

  app.listen(PORT, () => {
    console.log(PORT, ' port start')
  })
})
