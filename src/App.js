import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { Route, Router, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
import store from './store';
import logo from './logo.svg';
import './App.css';
import GoalCard from './views/GoalCard';
import Studies from './views/Study/views/Studies';

const history = createBrowserHistory();

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Provider store={store}>
          <Router history={history}>
            <Switch>
              <Route path="/studies" component={Studies} />
              <Route path="/card" component={GoalCard} />
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
