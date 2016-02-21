var React = require('react');
import {browserHistory} from 'react-router';

import Timer from './timer.jsx';
import Questionpane from './questionpane.jsx';

var questions = [
 	{
		question:'   What is the meaning of life? ',
		answer: true
	},
		{
		question:'  Why? Why? Tell em that its human nature',
		answer: true
	},
	{
		question:'  Whats the answer to the universe?',
		answer: true
	}
];


var Taketest = React.createClass({

  getInitialState() {
    startTimer: false
  },

  _handleCorrect() {
    browserHistory.push('/accepted');
  },

  _handleFailure() {
    browserHistory.push('/rejected');
  },

  getInitialState(){
    return {startTimer: false};
  },

//telling browser to start timer with state of startTimer when clicked button is set to true
  startQuiz: function(){
    this.setState({startTimer: true});
  },

  // finishTest function to be written HERE to render accepted or rejected page using if/else statement or logical not

  render() {
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
        <Timer
          initialStartTime={10}
          onTimerFinished={this._handleFailure}
          startTimer={this.state.startTimer}/>
      </div>
      { !this.state.startTimer ? <button className='testbutton' onClick={this.startQuiz}><span>BEGIN EVALUATION</span></button>: ''}
      { !this.state.startTimer ? '' : <Questionpane onCorrect={this._handleCorrect} onFailure={this._handleFailure} questions={questions}/>}

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
