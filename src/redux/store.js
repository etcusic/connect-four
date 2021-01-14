import { createStore } from 'redux'

// need to make this my own
function todosReducer(state = todos, action) {
    switch (action.type) {
      default:
        return state
    }
}
  
let store = createStore(todosReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export default store
