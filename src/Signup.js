import React, {Component} from 'react';
// import { ButtonInput } from 'react-bootstrap';
// import { Form, ValidatedInput } from 'react-bootstrap-validation';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }
  handleUsernameChange(event) {
    this.setState({username: event.target.value});
  }
  handleEmailChange(event) {
    this.setState({email: event.target.value});
  }
  handlePasswordChange(event) {
    this.setState({password: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (<div >
      <div className="container">
        <div className="card card-container">
          <img id="profile-img" alt="no-pic" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"/>
          <p id="profile-name" className="profile-name-card"></p>
          {/* <form className="form-signin" data-toggle="validator" id="myForm" onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input type="text" id="inputName" className="form-control" placeholder="Name" onChange={this.handleUsernameChange} required="required" autoFocus="autoFocus"/>
            </div>
            <div className="form-group">
              <input type="email" id="inputEmail" className="form-control" placeholder="Email address" onChange={this.handleEmailChange} required="required"/>
            </div>
            <div className="form-group">
              <input type="password" id="inputPassword" className="form-control" data-minlength="6" placeholder="Password" onChange={this.handlePasswordChange} required="required"/>
            </div>
            <div className="form-group">
              <input type="password" id="confirmPassword" className="form-control" placeholder="Confirm Password" data-match="#inputPassword" data-match-error="Passwords don't match" required="required"/>
              <div className="help-block with-errors"></div>
            </div>
            <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign Up</button>
          </form> */}
        </div>
      </div>
    </div>);
  }
}

export default Signup;
