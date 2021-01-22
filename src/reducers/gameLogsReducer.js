const gameLogsReducer = (state = [], action) => {
    switch(action.type){
        case "SET_GAME_LOGS": 
            let gameLogs = action.payload
            return gameLogs

        default:
            return state
    }
}

export default gameLogsReducer