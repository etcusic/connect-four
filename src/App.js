import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './routes/HomePage'
import Scores from './routes/Scores'
import GamePage from './routes/GamePage'


class App extends Component {

  render() {
    return (
      <Router>
      <NavBar />
        <div>
          
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/game" component={ GamePage } />
            <Route exact path="/scores" component={ Scores } />
          </Switch>

        </div>
      </Router>
    );
    
  }
}

export default App;
