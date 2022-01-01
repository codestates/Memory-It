import dotenv from 'dotenv'
import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import routes from './routes/restester'
dotenv.config()
const app = express()
const PORT = 8081

// app.use(
//   cors({
//     origin: process.env.LOC,
//     credentials: true,
//   })
// )

app.use(cors())

app.use('/', routes)

app.listen(PORT, () => {
  console.log(PORT, ' port start')
})
