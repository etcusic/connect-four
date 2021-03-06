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

export const sendConnectFourLog = (gameLog) => {
    return(dispatch) => {
        console.log("C")
        return fetch("http://localhost:3001/connect_four_logs", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({connect_four_log: gameLog})
        })
        .then(response => response.json())
        .then(log => {
            console.log("D")
            dispatch({ type: "ADD_CONNECT_FOUR_LOG", payload: log})
        })
    }
}