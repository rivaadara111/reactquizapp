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
          <h2>ACCEPTED</h2>
          <p>You have been accepted to mars mission.</p>
        </div>



      </div>

    )
  }
});


module.exports = Accepted;
