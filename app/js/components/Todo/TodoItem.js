import React from "react"
import Parse from "parse"
import ParseReact from "parse-react"

import { Link } from "react-router"

class TodoItem extends React.Component {
  onDelete(e) {
    ParseReact.Mutation.Destroy(this.props.todo).dispatch();

    e.preventDefault();
  }

  changeState(e) {
    ParseReact.Mutation.Set(this.props.todo, {
      done: !this.props.todo.done
    }).dispatch();

    e.preventDefault();
  }

  render() {
    let todo = this.props.todo;

    return <Link className="todo-item"
      to="todo"
      params={{todoId: todo.id.objectId}}>
      <button className="state"
        onClick={(e) => this.changeState(e)}>
        {todo.done ? <span className="done" /> : null}
      </button>
    	<p className="body">{todo.name}</p>
      <button className="delete"
        onClick={(e) => this.onDelete(e)}>
        x
      </button>
    </Link>;
  }
}

TodoItem.defaultProps = {
  todo: {}
}

export default TodoItem;
