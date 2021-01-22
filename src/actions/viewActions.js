import HomePage from '../routes/HomePage'
import LandingPage from '../routes/LandingPage'
import Scores from '../routes/Scores'
import WholeGame from '../routes/WholeGame'
import ConnectFour from '../routes/ConnectFour'

export const initializeApp = () => {
    const view = LandingPage
    return (dispatch) => dispatch({ type: "INITIALIZE_APP", payload: view})
}