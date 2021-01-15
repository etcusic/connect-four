export const changeColor = (token, turn) => {
    console.log(token)
    console.log(turn)
    (turn % 2 === 0) ? token.color = "red" : token.color = "blue"
    return token
}

export const changeH1 = () => {
    return {
        type: "SOMETHING",
        payload: {
            // tokens: state.tokens, 
            practice: "FUCKING WORK, PLEASE I SWEAR TO GOD"
        }
    }
}