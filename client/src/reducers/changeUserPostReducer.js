import { CHANGE_USER_POST } from '../actions'
import { initialUserPostState } from './initialUserPostState'


const headerReducer = (state = initialUserPostState, action) => {
  switch (action.type) {
  case CHANGE_USER_POST:
    return { ...state, userPost: action.payload.userPost }
  default:
    return state
  }
}

export default headerReducer