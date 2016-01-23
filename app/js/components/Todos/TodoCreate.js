import React from 'react'
import Parse from 'parse'
import ParseReact from 'parse-react'

class TodoCreate extends React.Component {

  render() {
    return (
      <div className='todo-create'>
        <input type='text'
          placeholder='Add something else to do...'
          ref='name'
          onKeyUp={(e) => this.onKeyUp(e)}/>
      </div>
    )
  }

  onCreate() {
    const input = this.refs.name

    if (input.value === '') { return }

    ParseReact.Mutation.Create('Todo', {
      name: input.value,
      done: false,
      user: Parse.User.current().toPlainObject(),
    }).dispatch()

    input.value = ''
  }

  onKeyUp(e) {
    if (e.keyCode === 13) {
      this.onCreate()
    }
  }
}

export default TodoCreate
