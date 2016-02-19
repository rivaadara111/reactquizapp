var React = require('react');

// import Question screen from './components/question-screen.jsx';
import Timer from './timer.jsx';

var Taketest = React.createClass({

  getInitialState(){
    return {
      startTimer: false
    }
  },

//trying to tell browser to start timer at the same time
  tellTimerToStart: function(){
    this.setState({ startTimer: true});
  },

  // finishTest function to be written HERE to render accepted or rejected page using if/else statement

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
      <div className='timercontainer'>
        <Timer start={this.state.startTimer}/></div>
      { !this.state.startTimer ? <button className='testbutton' onClick={this.tellTimerToStart}><span>BEGIN EVALUATION</span></button>: ''}
    </div>
    </div>
/*//Macs solution
<Timer countdownMinutes={1} finishQuiz={this.finishQuiz} start={this.state.start}/>
{ !this.state.start ? <button onClick={this.startQuiz}}
{this.state. start > this.renderTimer() : ''}*/

    )
  }
});


module.exports = Taketest;
