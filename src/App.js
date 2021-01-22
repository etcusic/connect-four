import React, { Component } from 'react'
// import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './routes/HomePage'
import Scores from './routes/Scores'
import WholeGame from './routes/WholeGame'
// import ConnectFour from './routes/ConnectFour'


class App extends Component {

  render() {
    return (
      <Router>
      <NavBar />
        <div>
          
          <Switch>
            <Route exact path="/" component={ HomePage } />
            <Route exact path="/game" component={ WholeGame } />
            {/* <Route exact path="/game" component={ ConnectFour } /> */}
            <Route exact path="/scores" component={ Scores } />
          </Switch>

        </div>
      </Router>
    );
    
  }
}

// const mapStateToProps = state => {
//   return {
//     pages: state.view.pages
//   }
// }

// export default connect(mapStateToProps)(App)

export default App;
