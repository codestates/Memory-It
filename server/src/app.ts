import dotenv = require('dotenv')
import express = require('express')
import cors = require('cors')
import morgan = require('morgan')
import 'reflect-metadata'

import routes from './routes/routes'

dotenv.config()
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
