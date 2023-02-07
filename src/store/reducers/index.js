import { combineReducers } from 'redux'
import todoReducer from './todo'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todoReducer,
  visibilityFilter
})