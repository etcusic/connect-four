// This reducer is supposed to update the new state for game, and then return it back to Game component
export default (state = [], action) => {
    // WTF am I doing here???
    switch(action.type){
        case "SET_PETS":
            return [...action.payload]
        case "ADD_PET":
            return [...state, action.payload]
        case "REMOVE_PET":
            let newPets = state.filter(pet => pet.id !== action.payload)
            return [...newPets]
        case "EDIT_PET":
            // do something
        default:
            return state
    }
}