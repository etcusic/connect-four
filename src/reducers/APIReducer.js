const apiReducer = (state = false, action) => {
    let object = state
    object = action.payload
    switch(action.type){
        case "LOAD_MUPPETS": 
            console.log(object)
            return object

        case "LOAD_CARDS":
            console.log(object)
            return object

        case "LOAD_GAME_LOGS":
            console.log(object)
            return object
            
        default:
            return state
    }
}

export default apiReducer