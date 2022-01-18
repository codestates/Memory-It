import { CHANGE_YEAR } from '../actions'
import { COLOR_FILTERING } from '../actions/headerAction'

const initialState = {
  year: 2022,
  colorFilter: [0, 1, 2, 3, 4, 5],
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_YEAR:
      return { ...state, year: action.payload.year }
    case COLOR_FILTERING: {
      return { ...state, colorFilter: action.payload.colorFilter }
    }
    default:
      return state
  }
}

export default headerReducer
