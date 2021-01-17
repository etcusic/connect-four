const sessionReducer = (state = {}, action) => {
    let session = state
    switch(action.type){
        case "INITIALIZE": 
            session = action.payload
            return session

        default:
            return state
    }
}

export default sessionReducer