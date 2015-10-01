import React from "react"
import { Link } from "react-router"
import {PureRenderMixin} from "react"


class TodoDetail extends React.Component {
  getDefaultProps() {
    return {
      todo: {}
    }
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
