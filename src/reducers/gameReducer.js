const gameReducer = (state = {practice: "Initial state"}, action) => {
    console.log("reducer")
    console.log("state", state)
    console.log("action", action)
    switch(action.type){
        case "SOMETHING":
            let newThing = action.payload
            // debugger
            console.log(newThing)
            return newThing
        default:
            return state
    }
}

export default gameReducer