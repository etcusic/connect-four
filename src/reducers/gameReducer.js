// const initialState = {
//     tokens: this.initializeTokens(),
//     practice: "INITIAL STATE"
// }

export default (state = {practice: "INITIAL STATE"}, action) => {
    console.log("reducer")
    switch(action.type){
        case "SOMETHING":
            return {practice: "NEW STATE, YAY!"}
        default:
            return state
    }
}