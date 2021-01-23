const cardsReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_CARDS": 
            let cards = action.payload
            return cards

        default:
            return state
    }
}

export default cardsReducer