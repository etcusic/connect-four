import { combineReducers } from 'redux'
import apiInfo from './apiReducer'
import session from './sessionReducer'
import game from './gameReducer'

export default combineReducers({
    apiInfo, session, game
})