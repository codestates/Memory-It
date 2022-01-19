import { UPDATE_USERPOST } from '../actions/userPostAction'

const initialPostState = {
  userPost: []
}

const updateUserpostReducer = (state = initialPostState, action) => {

  switch (action.type) {
  case UPDATE_USERPOST:
    return Object.assign({}, state, {
      userPost: action.payload.userPost
    })

  default:
    return state
  }
}

export default updateUserpostReducer