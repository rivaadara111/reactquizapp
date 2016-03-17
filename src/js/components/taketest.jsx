var React = require('react');
import {browserHistory} from 'react-router';

import Timer from './timer.jsx';
import Questionpane from './questionpane.jsx';

var questions = [
 	{
		question:'  In 1991, there were 60,000 jellyfish orbiting Earth.',
		answer: true
	},
		{
		question:'  There is a nebula shaped like a manatee that scientists named the "Manatee Nebula" in a special ceremony in 2013.',
		answer: true
	},
	{
		question:'  The sun is yellow.',
		answer: false
	}
];


var Taketest = React.createClass({

  getInitialState(){
    return {startTimer: false};
  },

  //telling browser to start timer with state of startTimer when clicked button is set to true
  startQuiz: function(){
    this.setState({startTimer: true});
  },

  _handleCorrect() {
    browserHistory.push('/accepted');
  },
//push to rejected page when timer runs out or wrong answers are given
  _handleFailure() {
    browserHistory.push('/rejected');
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
          initialStartTime={60}
          onTimerFinished={this._handleFailure}
          startTimer={this.state.startTimer}/>
      </div>
      { !this.state.startTimer ? <button className='testbutton' onClick={this.startQuiz}><span>BEGIN EVALUATION</span></button>: ''}
      { !this.state.startTimer ? '' : <Questionpane onCorrect={this._handleCorrect} onFailure={this._handleFailure} questions={questions}/>}

    </div>

  </div>

    )
  }
});


module.exports = Taketest;
