import React from "react"
import Parse from "parse"
import {Link} from "react-router"

class NavBar extends React.Component {
  onLogout() {
    Parse.User.logOut();
  }

  render() {
    return (
      <div id="navbar">
        <a href="http://github.com/kemcake/parse-react-sample"
          target="_blank">
          Github
        </a>
        {Parse.User.current() ? this.getLogoutNode() : null}
      </div>
    );
  }

  getLogoutNode() {
    return <Link to="/" onClick={this.onLogout}>
      Logout
    </Link>;
  }
}

NavBar.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default NavBar;
