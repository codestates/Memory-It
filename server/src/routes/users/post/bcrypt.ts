const bcrypt = require('bcrypt')

const saltRounds: Number = 10
const myPlaintextPassword: String = 's0//P4$$w0rD'
const someOtherPlaintextPassword: String = 'not_bacon'

export const autoGenHash = (myPlaintextPassword, saltRounds) => {
  return bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    console.log(hash)
    return hash
  })
}

export const checkHash = (myPlaintextPassword, hash) => {
  return bcrypt.hash(myPlaintextPassword, hash, function (err, result) {
    console.log(result)
    return result
  })
}
