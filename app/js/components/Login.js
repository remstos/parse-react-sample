import React from "react"
import Parse from "parse"
import Router from "react-router"

class Login extends React.Component {

  render() {
    return (
      <div id="login">
        <div className="login-container">
        	<input type="text" ref="emailInput" placeholder="Username"/>
        	<input type="password" ref="passwordInput" placeholder="Password"/>
        	<button className="submit login" onClick={this.onLogin.bind(this)}> Login </button>
        	<button className="submit signup" onClick={this.onSignup.bind(this)}> new user </button>
          <p>Demo account: demo/demo</p>
      	</div>
      </div>
    );
  }

  onLogin() {
    let email = this.refs.emailInput.value;
    let password = this.refs.passwordInput.value;
    Parse.User.logIn(email, password).then((user) => {
      this.props.history.replace("/");
    }, (error) => {
      console.log(error);
    });
  }

  onSignup() {
    let email = this.refs.emailInput.value;
    let password = this.refs.passwordInput.value;
    Parse.User.signUp(email, password).then((user) => {
      this.props.history.replace("/");
    }, (error) => {
      console.log(error);
    });
  }
}

export default Login;
