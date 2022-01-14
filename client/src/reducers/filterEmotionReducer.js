import { FILTER_EMOTION } from '../actions'

const initialState = {
  emotion: 0,
}

const filterEmotionReducer = (state = initialState, action) => {
  switch (action.type) {
  case FILTER_EMOTION:
    return { ...state, month: action.payload.month }
  default:
    return state
  }
}

export default filterEmotionReducer