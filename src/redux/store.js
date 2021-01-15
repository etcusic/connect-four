import { createStore } from 'redux'

const initialState = {
    // tokens: this.initializeTokens(),
    practice: "INITIAL STATE"
}
// simplest version of redux to get things working
function changeSomethingReducer(state = initialState, action) {
    switch (action.type) {
        case "SOMETHING":
            return {
                type: "SOMETHING",
                payload: {
                    // tokens: state.tokens, 
                    practice: "FUCKING WORK, PLEASE I SWEAR TO GOD"
                }
            }
        default:
            return state
    }
}
  
let store = createStore(changeSomethingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
