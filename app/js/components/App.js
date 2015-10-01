import React from "react"
import { RouteHandler } from "react-router";
import NavBar from "./NavBar"

class App extends React.Component{
  render() {
    return <div>
      <NavBar/>
      <RouteHandler />
    </div>;
  }
};

export default App;
