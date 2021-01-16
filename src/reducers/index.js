import { combineReducers } from 'redux'
import APIReducer from './APIReducer'
import game from './gameReducer'

export default combineReducers({
    APIReducer,
    game
})