import React from "react"
import { Link } from "react-router"

class TodoDetail extends React.Component {

  static propTypes = {
    todo: React.PropTypes.object.isRequired,
  }

  render() {
    return <div className="todo-detail">
      <Link to="todos"
        className="close">
        x
      </Link>
    	<p className="body">
        {this.props.todo.name}
      </p>
    </div>;
  }
}

export default TodoDetail;
