import Parse from 'parse'
import ParseReact from 'parse-react'
import React from 'react'
const ParseComponent = ParseReact.Component(React)

import _ from 'lodash'
import TodosList from './TodosList'
import TodoDetail from './TodoDetail'
import TodoCreate from './TodoCreate'

class Todos extends ParseComponent {

  observe() {
    const query = new Parse.Query('Todo')
    query.equalTo('user', Parse.User.current())
    query.ascending('updatedAt')
    return {
      todos: query,
    }
  }

  render() {
    return (
      <div className='todos'>
        <h1 className='title'>ParseReact - Todos</h1>
      	<TodosList todos={this.data.todos} />
      	<TodoCreate />
      	{this.renderDetail()}
      </div>
    )
  }

  renderDetail() {
    if (!this.props.params.todoId || this.data.todos.length === 0) { return false }
    const todo = _.find(this.data.todos, {objectId: this.props.params.todoId})
    if (!todo) { return false }
    return <TodoDetail todo={todo} />
  }
}

export default Todos
