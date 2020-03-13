import { combineReducers } from 'redux'
import audioReducer from './audioReducer'
import authReducer from './authReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  audioReducer: audioReducer
})

export default rootReducer
