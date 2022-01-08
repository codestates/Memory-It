import { combineReducers } from "redux"
import loginReducer from './loginReducer'
import rightbarReducer from './rightbarReducer'
import postReducer from "./postReducer"

import { persistReducer } from 'redux-persist'
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  loginReducer,
  rightbarReducer,
  postReducer
})

export default persistReducer(persistConfig, rootReducer)