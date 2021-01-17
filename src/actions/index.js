export const fetchMuppets = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/users')
        .then(resp =>  resp.json())
        .then(muppets => {
            dispatch({ type: "LOAD_MUPPETS", payload: muppets })
        })
    }
}

export const fetchDecks = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/decks')
        .then(resp =>  resp.json())
        .then(decks => {
            dispatch({ type: "LOAD_DECKS", payload: decks })
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

export const fetchConnectFourLogs = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/connect_four_logs') 
        .then(resp =>  resp.json())
        .then(gameLogs => {
            dispatch({ type: "LOAD_CONNECT_FOUR_LOGS", payload: gameLogs })
        })
    }
}

export const fetchCards = (id) => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/decks/${id}/cards`)
        .then(resp =>  resp.json())
        .then(cards => {
            dispatch({ type: "LOAD_CARDS", payload: cards })
        })
    }
}

export const initializeSession = (muppetInfo) => {
    console.log("initialize session")
    console.log(muppetInfo)
    return (dispatch) => dispatch({ type: "INITIALIZE", payload: muppetInfo})
}

export const initializeGame = (cardsArray) => {
    console.log("initialize game")
    console.log(cardsArray)
    const game = {
        cards: cardsArray,
        tokens: [],
        turn: 1,
        over: false,
        header: "Press the play button to begin!"
    }
    return (dispatch) => dispatch({ type: "INITIALIZE_GAME", payload: game})
}