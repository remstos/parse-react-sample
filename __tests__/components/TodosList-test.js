'use strict';
jest.dontMock('../../app/js/components/Todo/TodosList.jsx');
describe('TodosList', function() {
  it('tests fine', function() {
    var React = require('react/addons');
    var QuestionsList = require('../../app/js/components/Todo/TodosList.jsx');
    var TestUtils = React.addons.TestUtils;

    expect(1).toBe(1);
    
  });
});