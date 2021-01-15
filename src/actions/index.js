export const changeSomething = () => {
    console.log("action")
    return (dispatch) => dispatch({ type: "SOMETHING", payload: {tokens: [], practice: "NEW STATE, YAY!"} })
}