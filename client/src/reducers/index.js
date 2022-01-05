import { combineReducers } from "redux"
import loginReducer from './loginReducer'
import rightbarReducer from './rightbarReducer'

const rootReducer = combineReducers({
  loginReducer,
  rightbarReducer

})

export default rootReducer