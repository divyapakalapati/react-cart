import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Cart from './Cart';
import Items from './Items';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

class Main extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

      return (
        <div>
        <Header />
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/home' component={Home}/>
          <Route path='/products' component={Items}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/signUp' component={Signup}/>
        </Switch>
        </div>
      )
  }
}

export default Main;
