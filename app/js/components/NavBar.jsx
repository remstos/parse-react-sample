var React = require('react');
var Parse = require('parse').Parse;
var Router = require('react-router');
var Link = Router.Link;

var NavBar = React.createClass({
  
  contextTypes: {
    router: React.PropTypes.func.isRequired
  },
  
  onLogout: function() {
    Parse.User.logOut(); 
    this.context.router.replaceWith('/');
  },
  
  render: function() {
    return (
      <div id="navbar">
        <a href="http://github.com/kemcake/parse-react-sample" 
          target="_blank">
          Github
        </a>
        {this.getLogoutNode()}
      </div>
    );
  },
  
  getLogoutNode: function() {
    if (Parse.User.current() === null) return null;
    return (
      <Link to="/" onClick={this.onLogout}> Logout </Link>
    );
  }
});

module.exports = NavBar;
