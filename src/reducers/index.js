import { combineReducers } from 'redux'
import apiInfo from './apiReducer'
import session from './sessionReducer'

export default combineReducers({
    apiInfo, session
})