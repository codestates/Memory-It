import express from 'express'
import posts from './posts'
import users from './users'

const routers = express.Router()

routers.get('/', (req, res) => {
  res.location('/posts?type=diary&month=0').status(302).send('hello')
})

routers.use('/posts', posts)
routers.use('/users', users)

export default routers
