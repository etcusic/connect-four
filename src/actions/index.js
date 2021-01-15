export const changeSomething = () => {
    console.log("action")
    return (dispatch) => dispatch({ type: "SOMETHING", payload: {practice: "NEW STATE, YAY!"} })
}