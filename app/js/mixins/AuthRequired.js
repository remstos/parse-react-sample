var React = require('react');
var Parse = require('parse').Parse;

var AuthRequired = {
  
  contextTypes: {
    router: React.PropTypes.func
  },
  
  statics: {
    willTransitionTo: function(transition, params) {
      if (!Parse.User.current()) {
        transition.redirect('login', {}, {});
      }
    }
  }
};
module.exports = AuthRequired;