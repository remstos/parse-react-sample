import React from "react"
import { Link } from "react-router"
import {PureRenderMixin} from "react"

class TodoDetail extends React.Component {
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

TodoDetail.defaultProps = {
  todo: {}
}


export default TodoDetail;
