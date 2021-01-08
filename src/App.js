import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import LandingPage from './containers/LandingPage'
import Game from './containers/Game'
import Scores from './containers/Scores'

class App extends Component {

  constructor() {
    super();
    // why this???
  }

  render() {
    return (
      <Router>
      <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ LandingPage } />
            <Route exact path="/game" component={ Game } />
            <Route exact path="/scores" component={ Scores } />

            {/* if there is time => scope out scores by muppet id */}
            {/* <Route exact path="/scores/:id" render={  } /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
