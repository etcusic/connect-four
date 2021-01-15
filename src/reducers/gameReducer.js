export default (state = {practice: "INITIAL STATE"}, action) => {
    console.log("reducer")
    switch(action.type){
        case "SOMETHING":
            return action.payload
        default:
            return state
    }
}