import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux'
import store from './redux/store'
import reportWebVitals from './reportWebVitals';


// import { createStore, compose, applyMiddleware } from 'redux'
// import rootReducer from './reducers'
// import thunk from 'redux-thunk'
// import * as serviceWorker from './serviceWorker';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// let store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));


reportWebVitals();
