import { combineReducers } from 'redux'
import loginReducer from './loginReducer'
import rightbarReducer from './rightbarReducer'
import postReducer from './postReducer'
import changeImageReducer from './changeImageReducer'
import headerReducer from './headerReducer'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import lngReducer from './lngReducer'
import latReducer from './latReducer'
import postIdReducer from './postIdReducer'
import postInfoReducer from './postInfoReducer'
import postImageReducer from './postImageReducer'

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  loginReducer,
  rightbarReducer,
  postReducer,
  changeImageReducer,
  headerReducer,
  latReducer,
  lngReducer,
  postIdReducer,
  postInfoReducer,
  postImageReducer,
})

export default persistReducer(persistConfig, rootReducer)
