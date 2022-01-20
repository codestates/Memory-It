import { CONTENT } from '../../../hardWord'

export const dataValidator = (data: object): boolean => {
  for (let k in data) {
    if (k === CONTENT || k === 'image') continue
    else if (!data[k]) return false
  }
  return true
}
