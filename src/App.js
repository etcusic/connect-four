import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './containers/Home';

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
            <Route exact path="/" component={  } />
            <Route exact path="/game" component={  } />
            <Route exact path="/scores" component={  } />

            {/* if there is time => scope out scores by muppet id */}
            {/* <Route exact path="/scores/:id" render={  } /> */}

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
