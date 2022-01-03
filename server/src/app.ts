import dotenv = require('dotenv')
// import dotenv from 'dotenv'
import express = require('express')
// import Request, Response, NextFunction = require('express')
import cors = require('cors')
import 'reflect-metadata'

dotenv.config()
const app = express()
const PORT = 4000

app.use(
  cors({
    origin: process.env.LOC,
    credentials: true,
  })
)

// app.get('/', (req: Request, res: Response) => {
//   console.log(req)
//   // res.cookie('test', 'connection!', {
//   //   maxAge: 6000,
//   //   sameSite: 'lax',
//   //   path: '/',
//   //   httpOnly: true,
//   //   secure: false,
//   // })
//   res.send('success!!')
// })

app.listen(PORT, () => {
  console.log(PORT, ' port start')
})
