const gameLogsReducer = (state = [], action) => {
    switch(action.type){
        case "LOAD_CONNECT_FOUR_LOGS": 
            let gameLogs = action.payload
            return gameLogs
        case "ADD_CONNECT_FOUR_LOG":
            let gameLogs = action.payload
            return gameLogs

        default:
            return state
    }
}

export default gameLogsReducer