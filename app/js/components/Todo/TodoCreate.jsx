var React = require('react');
var Parse = require('parse').Parse;
var ParseReact = require('parse-react');
var Router = require('react-router');
var Link = Router.Link;

var TodoCreate = React.createClass({
  
  onCreate: function() {
    var input = this.refs.name.getDOMNode();
    if (input.value == "") return;
    ParseReact.Mutation.Create('Todo', {
      name: input.value,
      done: false,
      user: Parse.User.current().toPlainObject()
    }).dispatch();
    input.value = "";
  },
    
  onKeyUp: function(e) {
    if( e.keyCode == 13 ) {
      this.onCreate();
    }
  },
  
  render: function() {
    
    return (
      <div className="todo-create">
          <input 
            type="text" 
            placeholder="Add something else to do..."
            ref="name"
            onKeyUp={this.onKeyUp}/>
      </div>
    );
  }
});

module.exports = TodoCreate;
