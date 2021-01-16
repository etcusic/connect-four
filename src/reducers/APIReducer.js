const apiReducer = (state = false, action) => {
    switch(action.type){
        case "LOAD_MUPPETS": 
            let object = state
            object = action.payload
            console.log(object)
            return object
        default:
            return state
    }
}

export default apiReducer