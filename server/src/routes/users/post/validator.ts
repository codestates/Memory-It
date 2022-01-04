import { emailRegExp, passwordRegExp } from '../regexr'

type LoginData = {
  email: string
  password: string
}

type SignupData = {
  username: string
  email: string
  password: string
}

const usernameValidator = (username: string): boolean => {
  return
}

const emailValidator = (email: string): boolean => {
  return emailRegExp.test(email)
}

const pwValidator = (pw: string): boolean => {
  if (pw.length <= 7 || pw.length >= 13) return false
  return passwordRegExp.test(pw)
}

export const loginValidator = (loginData: LoginData): boolean => {
  if (emailValidator(loginData.email) && pwValidator(loginData.password)) return true
  return false
}

export const signupValidator = (signupData: SignupData): boolean => {
  if (signupData) return true
  return false
}
