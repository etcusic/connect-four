import { combineReducers } from 'redux'
import apiInfo from './apiReducer'
import session from './sessionReducer'
import game from './gameReducer'
import view from './viewReducer'

export default combineReducers({
    view, apiInfo, session, game
})