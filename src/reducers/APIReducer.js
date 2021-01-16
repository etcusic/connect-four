const APIReducer = (state = {}, action) => {
    switch(action.type){
        case "LOAD_MUPPETS": 
            return action.payload
        default:
            return state
    }
}