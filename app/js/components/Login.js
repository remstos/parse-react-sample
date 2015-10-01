import React from "react"
import Parse from "parse"
import Router from "react-router"

class Login extends React.Component {
  onLogin() {
    let email = this.refs.emailInput.getDOMNode().value;
    let password = this.refs.passwordInput.getDOMNode().value;

    Parse.User.logIn(email, password).then((user) => {
      this.context.router.replaceWith("/", {}, {});
    }, (error) => {
      console.log(error);
    });
  }

  onSignup() {
    let email = this.refs.emailInput.getDOMNode().value;
    let password = this.refs.passwordInput.getDOMNode().value;

    Parse.User.signUp(email, password).then((user) => {
      this.context.router.replaceWith("/", {}, {});
    }, (error) => {
      console.log(error);
    });
  }

  render() {
    return (
      <div id="login">
        <div className="login-container">
        	<input type="text" ref="emailInput" placeholder="Username"/>
        	<input type="password" ref="passwordInput" placeholder="Password"/>
        	<button className="submit login" onClick={() => this.onLogin()}> Login </button>
        	<button className="submit signup" onClick={() => this.onSignup()}> new user </button>
          <p>Demo account: demo/demo</p>
      	</div>
      </div>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Login;
