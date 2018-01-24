import React, {Component} from 'react';
import createHistory from "history/createBrowserHistory";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleEmailChange(event) {
    console.log("handleEmailChange", event.target.value);
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    console.log("handlePasswordChange", event.target.value);
    this.setState({password: event.target.value});
  }
  redirectClick(){
    const history = createHistory({forceRefresh: true});
    history.push("/signUp");
  }
  handleSubmit(event) {
    var data = {
      email: this.state.email,
      password: this.state.password
    };
    const history = createHistory({forceRefresh: true});
    console.log('A name was submitted: ', this.state);
    fetch('http://localhost/cartApi/user/login.php', {
      method: 'post',
      body: JSON.stringify(data)
    }).then(function(response) {
      response.json().then(function(text) {
        if(text !== "error"){
           localStorage.setItem("isLoggedIn",true);
           localStorage.setItem("userId",text.userId);
           history.push("/home");
        }
      });
    }).then(function(data) {
      console.log("error", data);
    });
    event.preventDefault();
  }
  render() {
    return (<div >
      <div className="container">
        <div className="card card-container">
          <img id="profile-img" alt="no-pic" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <p id="profile-name" className="profile-name-card"></p>
          <form className="form-signin" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleEmailChange} required="required" autoFocus="autoFocus"/>
            </div>
            <div className="form-group">
              <input type="password" id="inputPassword" className="form-control" placeholder="Password" onChange={this.handlePasswordChange} required="required"/>
            </div>
            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
          </form>
          <a onClick={this.redirectClick} className="create-acc">
            Create Account
          </a>
        </div>
      </div>
    </div>);
  }
}

export default Login;
