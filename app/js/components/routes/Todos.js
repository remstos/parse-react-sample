var React = require('react');
var _ = require('lodash');
var Parse =   require('parse').Parse;
var ParseReact = require('parse-react');

var TodosList = require('../Todo/TodosList');
var TodoDetail = require('../Todo/TodoDetail');
var TodoCreate = require('../Todo/TodoCreate');
var AuthRequired = require('../../mixins/AuthRequired');

var Todos = React.createClass({

  mixins: [AuthRequired,ParseReact.Mixin],

  observe: function() {
    var query = new Parse.Query("Todo");
    query.equalTo("user", Parse.User.current());
    query.ascending("updatedAt");
    return {
      todos: query,
    };
  },

  render: function() {
    return (
      <div className="todos">
        <h1 className="title">ParseReact - Todos</h1>
      	<TodosList todos={this.data.todos} />
      	{this.getTodoCreateNode()}
      	{this.getTodoDetailNode()}
      </div>
    );
  },

  getTodoDetailNode: function() {
    var params = this.context.router.getCurrentParams();
    if (params.todoId === undefined) return null;
    var currentTodo = _.find(this.data.todos, {objectId: params.todoId});
    return (
      <TodoDetail todo={currentTodo} />
    );
  },

  getTodoCreateNode: function() {
    if (this.data.todos.length >= 100) return null;
    return (
      <TodoCreate />
    );
  }
});

module.exports = Todos;
