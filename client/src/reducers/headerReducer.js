import { CHANGE_YEAR } from '../actions'

const initialState = {
  year: 2022,
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
  case CHANGE_YEAR:
    return { ...state, year: action.payload.year }
  default:
    return state
  }
}

export default headerReducer
