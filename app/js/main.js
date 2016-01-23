import React from "react"
import Parse from "parse"
import ReactDOM from "react-dom"
import Router, {Route, IndexRoute, browserHistory} from "react-router"

let PARSE_APP_ID = "s6CWs4ntdmIZgrQ0MfDT02DgRKTp4q3InQHUA77U";
let PARSE_JS_KEY = "F9rFXoA9svREjJOfxoFedVUBdhqWQBOZtszuiEK4";
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);

/* Routes components */
import App from "./components/App"
import Login from "./components/Login"
import Todos from "./components/routes/Todos"

// Style
require("./../assets/styles/main.less")

const loginRequired = (nextState, replace) => {
  if (!Parse.User.current()) {
    replace("/login");
  }
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route component={App} path="/">
      <Route path="login" component={Login}/>
      <IndexRoute onEnter={loginRequired} component={Todos}/>
      <Route path="/todo/:todoId" component={Todos}/>
    </Route>
  </Router>
), document.getElementById("app"));
