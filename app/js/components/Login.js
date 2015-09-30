var React = require('react');
var Parse =   require('parse').Parse;
var Router = require('react-router');

var Login = React.createClass({

  contextTypes: {
    router: React.PropTypes.func.isRequired
  },

  onLogin: function() {
    var email = this.refs.emailInput.getDOMNode().value;
    var password = this.refs.passwordInput.getDOMNode().value;
    var _this = this;
    Parse.User.logIn(email, password).then(function(user) {
      _this.context.router.replaceWith('/', {}, {});
    }, function(error) {
      console.log(error);
    });
  },

  onSignup: function() {
    var email = this.refs.emailInput.getDOMNode().value;
    var password = this.refs.passwordInput.getDOMNode().value;
    var _this = this;
    Parse.User.signUp(email, password).then(function(user) {
      _this.context.router.replaceWith('/', {}, {});
    }, function(error) {
      console.log(error);
    });
  },

  render: function() {
    return (
      <div id="login">
        <div className="login-container">
        	<input type="text" ref="emailInput" placeholder="Username"/>
        	<input type="password" ref="passwordInput" placeholder="Password"/>
        	<button className="submit login" onClick={this.onLogin}> Login </button>
        	<button className="submit signup" onClick={this.onSignup}> new user </button>
          <p>Good!</p>
      	</div>
      </div>
    );
  }
});

module.exports = Login;
