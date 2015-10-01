import React from "react"
import Parse from "parse"
import ParseReact from "parse-react"
import { Link } from "react-router"

export default class TodoCreate extends React.Component {
  onCreate() {
    let input = this.refs.name.getDOMNode();

    if (input.value == "") return;

    ParseReact.Mutation.Create('Todo', {
      name: input.value,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();

    input.value = "";
  }

  onKeyUp(e) {
    if(e.keyCode == 13) {
      this.onCreate();
    }
  }

  render() {
    return <div className="todo-create">
      <input type="text"
        placeholder="Add something else to do..."
        ref="name"
        onKeyUp={(e) => this.onKeyUp(e)}/>
    </div>;
  }
}
