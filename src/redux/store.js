import { createStore } from 'redux'

// need to make this applicable to this app
function changeSomethingReducer(state, action) {
    switch (action.type) {
        case "SOMETHING":
            return {}
        default:
            return state
    }
}
  
let store = createStore(changeSomethingReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
