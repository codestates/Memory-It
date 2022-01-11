import { CHANGE_LAT } from '../actions/index'
import { latState } from './latState'

const latReducer = (state = latState, action) => {
  switch (action.type) {
    case CHANGE_LAT:
      return Object.assign({}, state, {
        lat: action.payload.lat,
      })
    default:
      return state
  }
}

export default latReducer
