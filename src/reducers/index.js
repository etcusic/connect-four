import { combineReducers } from 'redux'
import user from './userReducer'
import deck from './deckReducer'
import game from './gameReducer'
import gameLogs from './gameLogsReducer'
// import apiInfo from './apiReducer'
// import session from './sessionReducer'
// import view from './viewReducer'

export default combineReducers({
    // view, apiInfo, session, game
    user, deck, gameLogs
})