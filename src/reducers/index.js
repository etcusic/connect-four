import { combineReducers } from 'redux'
import user from './userReducer'
import decks from './decksReducer'
import gameLogs from './gameLogsReducer'
import currentDeckOfCards from './cardsReducer'

export default combineReducers({
    user, decks, gameLogs, currentDeckOfCards
})