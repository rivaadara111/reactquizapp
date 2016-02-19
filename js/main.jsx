var    React = require('react');
var    ReactDOM = require('react-dom');
import {Router, Route, browserHistory, Redirect } from 'react-router';

//components
import Taketest from './components/taketest.jsx';
import Welcomepage  from './components/welcomepage.jsx';
import NotFound from './components/404.jsx';

var App = React.createClass({
  render: function(){
    return (
//routing different components to URLS that we choose
    <Router history={browserHistory}>
      <Redirect from='/' to='/welcome-page'/>
      <Route path='welcome-page' component={Welcomepage}/>
      <Route path='/take-test' component={Taketest}/>
      <Route path='*' component={NotFound}/>
    </Router>

    );
  }
});

ReactDOM.render(<App />, document.querySelector('#quiz-app'));
