var React = require('react');
var PureRenderMixin = require('react/addons').addons.PureRenderMixin;
var Router = require('react-router');
var Link = Router.Link;

TodoDetail = React.createClass({
  
  mixins: [PureRenderMixin],
  
  getDefaultProps: function() {
    return {
      todo: {}
    }
  },

  render: function() {
    var todo = this.props.todo;
    return (
      <div className="todo-detail">
        <Link 
          to="todos"
          className="close">
          x
        </Link>
      	<p className="body">
          {todo.name}
        </p>
      </div>
    );
  },
  
});

module.exports = TodoDetail;
