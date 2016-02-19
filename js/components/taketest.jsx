var React = require('react');

// import Question from './components/question-screen.jsx';
import Timer from './timer.jsx';

var Taketest = React.createClass({

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
      <div className='timercontainer'><Timer /></div>
      <button className='testbutton' onClick={this.startTimer}><span>BEGIN EVALUATION</span></button>
    </div>



  </div>

    )
  }
});


module.exports = Taketest;
