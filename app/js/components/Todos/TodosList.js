import React from 'react'
import TodoItem from './TodoItem.js'

class TodosList extends React.Component {

  static propTypes = {
    todos: React.PropTypes.array.isRequired,
  }

  render() {
    const items = this.props.todos.map((todo) => {
      return <TodoItem key={todo.id.objectId} todo={todo}/>
    })
    return (
      <div className='todos-list'>
      	{items}
      </div>
    )
  }
}

export default TodosList
