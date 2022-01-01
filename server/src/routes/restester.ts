import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('//')
})

router.get('/subloct', (req, res) => {
  res.send('migrated!!')
})

router.get('/loct', (req, res) => {
  res.location('/subloct').status(302).end()
})

export default router
