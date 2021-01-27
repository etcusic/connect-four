import { combineReducers } from 'redux'
import user from './userReducer'
import decks from './decksReducer'
import gameLogs from './gameLogsReducer'

export default combineReducers({
    user, decks, gameLogs
})