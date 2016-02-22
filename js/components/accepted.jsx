var React = require('react');
import {browserHistory} from 'react-router';

var Accepted = React.createClass({


  render: function(){
    return (
      <div className='landingpage'>

        <header className='sider'>
          <h1>MARS</h1>
            <div className='rocketicon'>
              <i className='fa fa-space-shuttle'></i>
            </div>
        </header>

        <div className='main'>
          <div className='msg-container'>
            <h2>ACCEPTED</h2>
            <h4>You have been accepted to Mars mission: Colonize.</h4>
          </div>
        </div>



      </div>

    )
  }
});


module.exports = Accepted;
