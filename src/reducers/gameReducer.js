const gameReducer = (state = {practice: "Initial state"}, action) => {
    switch(action.type){
        case "SOMETHING": 
            return action.payload
        default:
            return state
    }
}

export default gameReducer