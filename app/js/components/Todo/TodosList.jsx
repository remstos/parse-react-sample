var React = require('react');
var TodoItem = require('./TodoItem.jsx');

TodosList = React.createClass({
  
  getDefaultProps: function() {
    return {
      todos: []
    }
  },
  
  render: function() {
    return (
      <div className="todos-list">
      	{this.getTodoNodes()}
      </div>
    );
  },
  
  getTodoNodes: function () {
    return this.props.todos.map(function(todo){
      return (
        <TodoItem
          key={todo.id.objectId} 
          todo={todo} 
        />
      );
    }.bind(this));
  }
});

module.exports = TodosList;
