import { combineReducers } from 'redux'
import user from './userReducer'
import decks from './decksReducer'
import gameLogs from './gameLogsReducer'
// import apiInfo from './apiReducer'
// import session from './sessionReducer'
// import view from './viewReducer'

export default combineReducers({
    // view, apiInfo, session, game
    user, decks, gameLogs
})