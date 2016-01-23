import React from 'react'
import ParseReact from 'parse-react'
import { Link } from 'react-router'

class TodoItem extends React.Component {

  static propTypes = {
    todo: React.PropTypes.object.isRequired,
  }

  render() {
    const todo = this.props.todo
    return (
      <Link className='todo-item' to={`todo/${todo.id.objectId}`}>
        <button className='state'
          onClick={this.onChangeState.bind(this)}>
          {todo.done ? <span className='done' /> : null}
        </button>
      	<p className='body'>{todo.name}</p>
        <button className='delete' onClick={this.onDelete.bind(this)}>
          <img className='trash' src={require('images/trash.png')} />
        </button>
      </Link>
    )
  }

  onDelete() {
    ParseReact.Mutation.Destroy(this.props.todo).dispatch()
  }

  onChangeState() {
    ParseReact.Mutation.Set(this.props.todo, {
      done: !this.props.todo.done,
    }).dispatch()
  }
}

export default TodoItem
