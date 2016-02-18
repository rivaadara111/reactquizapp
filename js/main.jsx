var React = require('react');
var ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Redirect } from 'react-router';

//components
import Taketest from './components/taketest.jsx';

var App = React.createClass({
  render: function(){
    return (
    <div>
      <Taketest />
    </div>

    );
  }
});


ReactDOM.render(<App/>, document.querySelector('#quiz-app'));
