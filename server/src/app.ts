import dotenv = require('dotenv')
import express = require('express')
import cors = require('cors')
import morgan = require('morgan')
import 'reflect-metadata'
import { createConnection } from 'typeorm'

import routes from './routes/routes'

dotenv.config()
const PORT = 8081
createConnection().then(async connection => {
  const app = express()

  app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(morgan('dev'))

  app.use('/', routes)

  app.listen(PORT, () => {
    console.log(PORT, ' port start')
  })
})
