export const changeSomething = (currentState) => {
    let object = currentState
    object.practice = "NEW STATE, YAY!!"
    return (dispatch) => dispatch({ type: "SOMETHING", payload: object})
}

export const fetchMuppets = (thing) => {
    return(dispatch) => {
        return fetch('http://localhost:3001/users')
        .then(resp =>  resp.json())
        .then(muppets => {
            dispatch({ type: "LOAD_MUPPETS", payload: muppets })
        })
    }
}