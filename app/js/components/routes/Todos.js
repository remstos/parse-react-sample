import Parse from "parse"
import ParseReact from "parse-react"
import React from "react"
const ParseComponent = ParseReact.Component(React);

import _ from "lodash"
import TodosList from "../Todo/TodosList"
import TodoDetail from "../Todo/TodoDetail"
import TodoCreate from "../Todo/TodoCreate"

class Todos extends ParseComponent {
  constructor(props) {
    super(props);
  }

  observe() {
    let query = new Parse.Query("Todo");
    query.equalTo("user", Parse.User.current());
    query.ascending("updatedAt");
    return {
      todos: query,
    };
  }

  render() {
    return <div className="todos">
      <h1 className="title">ParseReact - Todos</h1>
    	<TodosList todos={this.data.todos} />
    	<TodoCreate />
    	{this.renderDetail()}
    </div>;
  }

  renderDetail() {
    if (!this.props.params.todoId || this.data.todos.length == 0) { return false; }
    const todo = _.find(this.data.todos, {objectId: this.props.params.todoId});
    if (!todo) { return false; }
    return <TodoDetail todo={todo} />;
  }
}

export default Todos;
