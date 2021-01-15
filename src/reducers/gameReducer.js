export default (state = {practice: "Initial state"}, action) => {
    console.log("reducer")
    switch(action.type){
        case "SOMETHING":
            let newThing = action.payload
            // debugger
            return newThing
        default:
            return state
    }
}