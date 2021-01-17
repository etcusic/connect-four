const apiReducer = (state = {}, action) => {
    let apiInfo = state
    switch(action.type){
        case "LOAD_MUPPETS": 
            apiInfo.muppets = action.payload
            return apiInfo

        case "LOAD_CARDS":
            apiInfo.cards = action.payload
            return apiInfo

        case "LOAD_GAME_LOGS":
            apiInfo.gameLogs = action.payload
            return apiInfo

        default:
            return state
    }
}

export default apiReducer