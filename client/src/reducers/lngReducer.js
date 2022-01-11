import { CHANGE_LNG } from '../actions/index'
import { lngState } from './lngState'

const lngReducer = (state = lngState, action) => {
  switch (action.type) {
    case CHANGE_LNG:
      return Object.assign({}, state, {
        lng: action.payload.lng,
      })
    default:
      return state
  }
}

export default lngReducer
