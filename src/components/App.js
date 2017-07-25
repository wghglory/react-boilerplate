import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import '../scss/App.scss';
import Home from './Home';
import About from './About';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/about' component={About}/>
            <Route render={() => <p>Not found</p>}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}