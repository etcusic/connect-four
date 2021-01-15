export const changeSomething = (object) => {
    console.log(object)
    object.practice = "NEW STATE, YAY!!"
    return (dispatch) => dispatch({ type: "SOMETHING", payload: object})
}