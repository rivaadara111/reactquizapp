var React = require('react');
import {browserHistory} from 'react-router';
import Timer from './timer.jsx';
// import Question screen from './components/question-screen.jsx';

var Taketest = React.createClass({

//getting browserHistory to push new pages on TO BE DETERMINED onlick event 
  Accepted(){
    browserHistory.push('/accepted');
  },
  Rejected(){
    browserHistory.push('/rejected');
  },

  getInitialState(){
    return {
      startTimer: false
    }
  },

//telling browser to start timer when state of startTimer via clicked button is set to true
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
