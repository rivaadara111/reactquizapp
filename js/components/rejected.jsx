var React = require('react');
import {browserHistory} from 'react-router';

var Rejected = React.createClass({

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
            <h2>REJECTED</h2>
            <h4>We regret to inform you that you are not good enough to colonize mars.<br/>
                Choke smog and die, sucker!!</h4>
          </div>
        </div>

      </div>

    )
  }
});


module.exports = Rejected;
