export const changeColor = (token, turn) => {
    (turn % 2 === 0) ? token.color = "red" : token.color = "blue"
    return token
}