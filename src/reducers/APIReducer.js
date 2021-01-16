const apiReducer = (state = {apiInfo: []}, action) => {
    switch(action.type){
        case "LOAD_MUPPETS": 
            let object = state
            object.apiInfo = action.payload
            return object
        default:
            return state
    }
}

export default apiReducer