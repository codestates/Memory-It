import { CHANGE_POSTID } from '../actions/index'
import { postIdState } from './postIdState'

const postIdReducer = (state = postIdState, action) => {
  switch (action.type) {
    case CHANGE_POSTID:
      return Object.assign({}, state, {
        postId: action.payload.postId,
      })
    default:
      return state
  }
}

export default postIdReducer
