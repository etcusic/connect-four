const defaultUser = {
    id:3,
    name:"Gonzo",
    image:"/photos/gonzo_thegreat.jpg"
}

const userReducer = (state = {}, action) => {
    switch(action.type){
        case "SET_USER": 
            let user = action.payload
            return user

        default:
            return state
    }
}

export default userReducer