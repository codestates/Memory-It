import { emailRegExp, passwordRegExp, usernameReqExp } from '../regexr'

type LoginData = {
  email: string
  password: string
}

type SignupData = {
  username: string
  email: string
  password: string
}

export const usernameValidator = (username: string): boolean => {
  return !usernameReqExp.test(username)
}

const emailValidator = (email: string): boolean => {
  return emailRegExp.test(email)
}

export const pwValidator = (pw: string): boolean => {
  if (pw.length <= 7 || pw.length >= 13) return false
  return passwordRegExp.test(pw)
}

export const loginValidator = (loginData: LoginData): boolean => {
  const { email, password } = loginData
  if (emailValidator(email) && pwValidator(password)) return true
  return false
}

export const signupValidator = (signupData: SignupData): boolean => {
  const { username, email, password } = signupData
  if (usernameValidator(username) && emailValidator(email) && pwValidator(password))
    return true
  return false
}
