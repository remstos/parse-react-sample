import React from "react"
import Parse from "parse"
import {Link} from "react-router"

class NavBar extends React.Component {

  onLogout() {
    Parse.User.logOut();
    this.props.history.replace("/login");
  }

  render() {
    return (
      <div id="navbar">
        <a href="http://github.com/kemcake/parse-react-sample"
          target="_blank">
          Github
        </a>
        {this.renderLogout()}
      </div>
    );
  }

  renderLogout() {
    if (!Parse.User.current()) { return false; }
    return <Link to="/" onClick={this.onLogout.bind(this)}>
      Logout
    </Link>;
  }
}

export default NavBar;
