import Parse from "parse"
// ParseReact sits on top of your Parse singleton
import ParseReact from "parse-react"
import React from "react"
var ParseComponent = ParseReact.Component(React);


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
    if (!Parse.User.current()) {
      this.context.router.transitionTo("login");
    }

    let params = this.context.router.getCurrentParams();

    return <div className="todos">
      <h1 className="title">ParseReact - Todos</h1>
    	<TodosList todos={this.data.todos} />
    	{this.getTodoCreateNode()}
    	{params.todoId ? this.getTodoDetailNode() : null}
    </div>;
  }

  getTodoDetailNode() {
    return !_.isEmpty(this.data.todos) ? this._renderTodoDetail() : null
  }

  _renderTodoDetail() {
    return <TodoDetail todo={this._getTodoDetail()} />;
  }

  _getTodoDetail() {
    let params = this.context.router.getCurrentParams();

    return _.find(this.data.todos, {objectId: params.todoId});
  }

  getTodoCreateNode() {
    return <TodoCreate />
  }
}

Todos.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default Todos;
