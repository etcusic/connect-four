export const fetchCards = (id) => {
    return(dispatch) => {
        return fetch(`http://localhost:3001/decks/${id}/cards`)
        .then(resp =>  resp.json())
        .then(cards => {    
            dispatch({ type: "LOAD_CARDS", payload: cards })
        })
    }
}