import { CHANGE_POSTINFO } from '../actions/index'
import { postInfoState } from './postInfoState'

const postInfoReducer = (state = postInfoState, action) => {
  switch (action.type) {
    case CHANGE_POSTINFO:
      return Object.assign({}, state, {
        postInfo: action.payload.postInfo,
      })
    default:
      return state
  }
}

export default postInfoReducer
