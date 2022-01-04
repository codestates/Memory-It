import { CONTENT } from '../../../hardWord'

export const dataValidator = (data: object): boolean => {
  for (let k in data) {
    if (k === CONTENT) continue
    else if (!data[k].length) return false
  }
  return true
}
