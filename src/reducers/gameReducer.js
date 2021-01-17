const gameReducer = (state = {}, action) => {
    switch(action.type){
        case "INITIALIZE_GAME": 
            let game = action.payload
            return game

        default:
            return state
    }
}

export default gameReducer