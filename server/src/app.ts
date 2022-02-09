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

  app.get('/', currentUser, beforeLogin)
  app.use('/', routes)

  app.listen(process.env.PORT, () => {
    console.log(process.env.PORT, ' port start')
  })
})
