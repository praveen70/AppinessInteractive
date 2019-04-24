import React from "react";
import { createStore, applyMiddleware,  compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from '../src/reducer/index';
import Login from './components/login/index'
import Dashboard from './components/dashboard/index';

import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';

class App extends React.Component {

  render() {
    console.disableYellowBox = true;
    return (
      <Router>
        <Provider store={createStore(rootReducer, {}, compose(applyMiddleware(thunk)))}>
          <Switch>
              <Route exact path="/" component={ Login } />
              <Route path='/Dashboard' component = {Dashboard} />
          </Switch>
        </Provider>
    </Router>
  
  );
  }
}

export default App;