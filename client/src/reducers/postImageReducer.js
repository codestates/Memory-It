import { CHANGE_POSTIMAGE } from '../actions/index'
import { postImageState } from './postImageState'

const postImageReducer = (state = postImageState, action) => {
  switch (action.type) {
    case CHANGE_POSTIMAGE:
      return Object.assign({}, state, {
        postImage: action.payload.postImage,
      })
    default:
      return state
  }
}

export default postImageReducer
