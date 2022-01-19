import { CHANGE_TO_DIARY_TRUE, CHANGE_TO_DIARY_FALSE} from '../actions/index'
import { initialPostState } from './initialPostState'

const postReducer = (state = initialPostState, action) => {

  switch (action.type) {
  case CHANGE_TO_DIARY_TRUE:
    return Object.assign({}, state, {
      isDiary: action.payload.isDiary
    })
  case CHANGE_TO_DIARY_FALSE:
    return Object.assign({}, state, {
      isDiary: action.payload.isDiary
    }) 
  default:
    return state
  }
}

export default postReducer