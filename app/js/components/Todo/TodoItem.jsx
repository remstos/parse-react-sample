var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Link = Router.Link;

TodoItem = React.createClass({
  
  getDefaultProps: function() {
    return {
      todo: {}
    }
  },
  
  onDelete: function(e) {
    ParseReact.Mutation.Destroy(this.props.todo).dispatch();
    e.preventDefault();
  },
  
  changeState: function(e) {
    var state = this.props.todo.done;
    ParseReact.Mutation.Set(this.props.todo, {
      done:!state
    }).dispatch();
    e.preventDefault();
  },
  
  render: function() {
    var todo = this.props.todo;
    var doneNode;
    if (this.props.todo.done) {
      doneNode = <span className="done" />;
    }
    return (
      <Link 
        className="todo-item"
        to="todo"
        params={{todoId:todo.id.objectId}}>
        <button 
          className="state"
          onClick={this.changeState}>
          {doneNode}
        </button>
      	<p className="body">
      	  {todo.name}
        </p>
        <button 
          className="delete" 
          onClick={this.onDelete}>
          x
        </button>
      </Link>
    );
  },
  

});

module.exports = TodoItem;
