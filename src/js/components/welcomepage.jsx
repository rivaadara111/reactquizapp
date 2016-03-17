var React = require('react');
import {browserHistory} from 'react-router';

var Welcomepage = React.createClass({

  _handleTakeTest(){
    browserHistory.push('/take-test');
  },

  render(){
    return (
      <div className='landingpage'>

        <header className='sider'>
          <h1>MARS</h1>
            <div className='rocketicon'>
              <i className='fa fa-space-shuttle'></i>
            </div>
        </header>

        <div className='main'>
          <button className='testbutton' onClick={this._handleTakeTest}><span>TAKE TEST</span></button>
        </div>



      </div>

    )
  }
});


module.exports = Welcomepage;
