import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './containers/HomePage'
import LandingPage from './containers/LandingPage'
// import Game from './containers/Game'
import Scores from './containers/Scores'
import WholeGame from './containers/WholeGame'

class App extends Component {

  render() {
    return (
      <Router>
      <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/landing-page" component={ LandingPage } />
            <Route exact path="/game" component={ WholeGame } />
            {/* <Route exact path="/game" component={ Game } /> */}
            <Route exact path="/scores" component={ Scores } />
          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;
