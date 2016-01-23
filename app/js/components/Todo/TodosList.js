import React from "react"
import TodoItem from "./TodoItem.js"

class TodosList extends React.Component {

  static propTypes = {
      todos: React.PropTypes.array.isRequired,
  }

  render() {
    return <div className="todos-list">
    	{this.getTodoNodes()}
    </div>;
  }

  getTodoNodes() {
    return this.props.todos.map((todo) => {
      return <TodoItem key={todo.id.objectId} todo={todo}/>;
    });
  }
}

export default TodosList;
