export const fetchDecks = () => {
    return(dispatch) => {
        return fetch('http://localhost:3001/decks')
        .then(resp =>  resp.json())
        .then(decks => {
            dispatch({ type: "LOAD_DECKS", payload: decks })
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