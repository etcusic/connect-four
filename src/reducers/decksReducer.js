const decksReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_DECKS": 
            let decks = action.payload
            return decks

        default:
            return state
    }
}

export default decksReducer