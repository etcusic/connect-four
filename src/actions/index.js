export const changeSomething = (currentState) => {
    let object = currentState
    object.practice = "NEW STATE, YAY!!"
    return (dispatch) => dispatch({ type: "SOMETHING", payload: object})
}

export const fetchMuppets = () => {
    return(dispatch) => {
        return fetch('http://localhost:3000/users')
        .then(resp => resp.json())
        .then(pets => {
            dispatch({ type: "LOAD_MUPPETS", payload: pets })
        })
    }
}