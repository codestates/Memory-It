import { CHANGE_IMAGE } from '../actions/index'
import { initialImageState } from './initialImageState'

const changeImageReducer = (state = initialImageState, action) => {

  switch (action.type) {
  case CHANGE_IMAGE:
    return Object.assign({}, state, {
      picture: action.payload.picture
    })
  default:
    return state
  }
}

export default changeImageReducer