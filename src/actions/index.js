export const changeSomething = (currentState) => {
    let object = currentState
    object.practice = "NEW STATE, YAY!!"
    return (dispatch) => dispatch({ type: "SOMETHING", payload: object})
}