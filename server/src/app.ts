import dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './routes/routes'
import morgan from 'morgan'

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
