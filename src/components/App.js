import '../scss/App.scss';
import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Nav/>
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