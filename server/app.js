require('dotenv').config()
const app = require('express')()
const cors = require('cors')

app.use(
  cors({
    origin: [process.env.ORG],
    credentials: true,
  })
)
app.get('/', (req, res) => {
  // console.log(req)
  res.cookie('test', 'connection!', {
    maxAge: 6000,
    sameSite: 'lax',
    path: '/',
    httpOnly: true,
    secure: false,
  })
  res.send('success!!')
})

app.listen(4000, () => {
  console.log('4000port start')
})
