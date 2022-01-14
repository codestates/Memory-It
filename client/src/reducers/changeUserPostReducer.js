import { CHANGE_USER_POST } from '../actions'
import { initialUserPostState } from './initialUserPostState'

const changeUserPostReducer = (state = initialUserPostState, action) => {
  switch (action.type) {
    case CHANGE_USER_POST:
      return {
        ...state,
        userPostAPI: action.payload.userPostAPI,
        month: action.payload.month,
      }
    default:
      return state
  }
}

export default changeUserPostReducer
