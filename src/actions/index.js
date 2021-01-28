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

// currently scoped out by user
export const fetchConnectFourLogs = (id) => {
    // OPTIONAL ADDITION: if (id) => scoped out route; else => index all game logs
    return(dispatch) => {
        return fetch(`http://localhost:3001/users/${id}/connect_four_logs`) 
        .then(resp =>  resp.json())
        .then(gameLogs => {
            dispatch({ type: "LOAD_CONNECT_FOUR_LOGS", payload: gameLogs })
        })
    }
}

export const sendConnectFourLog = (log) => {
    // OPTIONAL ADDITION: if (id) => scoped out route; else => index all game logs
    return(dispatch) => {
        return fetch(`http://localhost:3001/users/${id}/connect_four_logs`) 
        .then(resp =>  resp.json())
        .then(gameLogs => {
            dispatch({ type: "LOAD_CONNECT_FOUR_LOGS", payload: gameLogs })
        })
    }
}