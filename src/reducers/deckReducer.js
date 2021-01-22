const deckReducer = (state = [], action) => {
    switch(action.type){
        case "SET_DECKS": 
            let decks = action.payload
            return decks

        default:
            return state
    }
}

export default deckReducer