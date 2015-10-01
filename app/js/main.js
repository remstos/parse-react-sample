import React from "react"
import Parse from "parse"

let PARSE_APP_ID = "s6CWs4ntdmIZgrQ0MfDT02DgRKTp4q3InQHUA77U";
let PARSE_JS_KEY = "F9rFXoA9svREjJOfxoFedVUBdhqWQBOZtszuiEK4";
Parse.initialize(PARSE_APP_ID, PARSE_JS_KEY);

/* ROUTES */

import App from "./components/App"
import Login from "./components/Login"
import Todos from "./components/routes/Todos"

import Router, {Route, RouteHandler, DefaultRoute} from "react-router"

// Style

require("./../assets/styles/main.less")


let routes = (
  <Route handler={App} path="/">
    <DefaultRoute handler={Todos} />
    <Route name="login" handler={Login}/>
    <Route name="todos" handler={Todos} path="/asd">
      <Route name="todo-new" path="/todos/new" handler={Todos}/>
      <Route name="todo" path="/todo/:todoId" handler={Todos}/>
    </Route>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
