export const changeSomething = (currentState) => {
    let object = currentState
    object.practice = "NEW STATE, YAY!!"
    return (dispatch) => dispatch({ type: "SOMETHING", payload: object})
}

export const fetchMuppets = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/users')
        .then(resp =>  resp.json())
        .then(muppets => {
            dispatch({ type: "LOAD_MUPPETS", payload: muppets })
        })
    }
}

export const fetchCards = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/decks/1/cards')
        .then(resp =>  resp.json())
        .then(cards => {
            dispatch({ type: "LOAD_CARDS", payload: cards })
        })
    }
}

export const fetchGameLogs = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/game_logs')
        .then(resp =>  resp.json())
        .then(gameLogs => {
            dispatch({ type: "LOAD_GAME_LOGS", payload: gameLogs })
        })
    }
}

export const initializeSession = (muppetInfo) => {
    console.log("initialize session")
    console.log(muppetInfo)
    return (dispatch) => dispatch({ type: "INITIALIZE", payload: muppetInfo})
}

