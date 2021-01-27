import LandingPage from './LandingPage'
import Beaker from './Beaker'

const page = LandingPage
// const page = Beaker

const viewReducer = (state = {pages: [LandingPage]}, action) => {
    switch (action.type){
        case "HOME_PAGE":
            return action.payload

        default:
            return state
    }
}

export default viewReducer