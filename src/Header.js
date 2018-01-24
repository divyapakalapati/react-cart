import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import createHistory from "history/createBrowserHistory";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.myClickHandler = this.myClickHandler.bind(this);
  }
  myClickHandler(event) {
    const history = createHistory({forceRefresh: true});
    localStorage.removeItem("isLoggedIn");
    history.push("/");
  }

  render() {
    if (localStorage.isLoggedIn) {
      return (<div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">SHOPPING - CART</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/home" exact>Home</NavLink>
                </li>
                <li>
                  <NavLink to="/products" activeClassName="active">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/cart" activeClassName="active">Cart</NavLink>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/" className="glyphicon glyphicon-log-out" onClick={this.myClickHandler}>
                    Logout</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>);
    } else {
      return (<div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">SHOPPING - CART</a>
            </div>
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav navbar-right">
                {/* <li>
                  <NavLink to="/signUp" className="glyphicon glyphicon-user" activeClassName="active">
                     SignUp</NavLink>
                </li> */}
                <li>
                  <NavLink to="/" exact className="glyphicon glyphicon-log-in" activeClassName="active">
                     Login</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>)
    }

  }
}

export default Header;
