import React from "react"
import TodoItem from "./TodoItem.js"

export default class TodosList extends React.Component {
  constructor(props) {
    super(props);
  }

  getDefaultProps() {
    return {
      todos: []
    }
  }

  render() {
    return <div className="todos-list">
    	{this.getTodoNodes()}
    </div>;
  }

  getTodoNodes() {
    return this.props.todos.map((todo) => {
      return <TodoItem
        key={todo.id.objectId}
        todo={todo}
      />;
    });
  }
}
