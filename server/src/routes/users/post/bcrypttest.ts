// const bcrypt = require('bcrypt')

// const saltRounds: Number = 10

// export const autoGenHash = async (myPlaintextPassword, saltRounds) => {
//   let genneratedHash: String
//   await bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
//     console.log('여기서 해쉬나온값', hash)
//     genneratedHash = hash
//     console.log('저장안됨???', genneratedHash)
//     return hash
//   })
// }

// export const checkHash = (myPlaintextPassword, hash) => {
//   return bcrypt.hash(myPlaintextPassword, hash, function (err, result) {
//     console.log(result)
//     return result
//   })
// }
