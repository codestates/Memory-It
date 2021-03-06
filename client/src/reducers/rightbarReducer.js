import {
  CREATE_POST_MODE,
  MODIFY_PROFILE_MODE,
  DETAILED_POST_MODE,
  WELCOME_MODE,
  CONTACT_US_PAGE,
  POSTING_MAP_MODE,
} from '../actions/index'
import { LOADING_INDICATOR } from '../actions/rightbarActions'
import { initialRightBarState } from './initialRightBarState'

const rightbarReducer = (state = initialRightBarState, action) => {
  switch (action.type) {
    case CREATE_POST_MODE:
      return Object.assign({}, state, {
        rightBar: action.payload.rightBar,
      })
    case MODIFY_PROFILE_MODE:
      return Object.assign({}, state, {
        rightBar: action.payload.rightBar,
      })
    case CONTACT_US_PAGE:
      return Object.assign({}, state, {
        rightBar: action.payload.rightBar,
      })
    case DETAILED_POST_MODE:
      const {
        rightBar,
        id,
        mainImage,
        emotion,
        marker,
        content,
        lat,
        lng,
        allImage,
        createdAt,
      } = action.payload
      return Object.assign({}, state, {
        rightBar,
        id,
        mainImage,
        emotion,
        marker,
        content,
        lat,
        lng,
        allImage,
        createdAt,
      })
    case WELCOME_MODE:
      return Object.assign({}, state, {
        rightBar: action.payload.rightBar,
      })
    case POSTING_MAP_MODE:
      const { right, data, postingImages } = action.payload
      return Object.assign({}, state, {
        rightBar: action.payload.rightBar,
        data,
        postingImages,
      })
    case LOADING_INDICATOR:
      return { ...state, rightBar: action.payload.rightBar }
    default:
      return state
  }
}

export default rightbarReducer
