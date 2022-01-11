import { CHANGE_MONTH, SET_MONTH_REF } from '../actions'

const initialState = {
  month: 'January',
}

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_MONTH:
      return { ...state, month: action.payload.month }
    default:
      return state
  }
}

export default headerReducer
