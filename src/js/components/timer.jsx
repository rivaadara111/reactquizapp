import React from 'react';
import {browserHistory} from 'react-router';

var Timer = React.createClass({

  getInitialState(){
    return {
      secondsToElapse: this.props.initialStartTime
    };
  },
//if the timer component recieves new properties from statTimer (ie. a value of true instead of false), start the timer function
  componentWillReceiveProps(nextProps) {
    if (nextProps.startTimer) this._startTimer();
  },

//start the timer with an interval of 1000 miliseconds per second, then reference the decrement counter
  _startTimer(){
    this.interval = setInterval(this._decrementCounter, 1000);
    },

//set the timer to elapse -1 second per 1000 interval; sets it as the new state that secondsToElapse will be this componenets initial state - 1
  _decrementCounter() {
    this.setState({secondsToElapse: this.state.secondsToElapse - 1});
  },

//this is what has the timer stop at 0 if it is at 0 , and updates the compnent with this new property if the seconds to elapse === 0
//when it does === 0, we are running a new function onTimerFinished which will load the rejected page when the if statement evaluates to true
  componentDidUpdate(prevProps, prevState) {
    if (this.state.secondsToElapse === 0) this.props.onTimerFinished();
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  render(){
    return (
      <div className={this.props.startTimer ? "timer" : "timer hidden"}>
        00:{this.state.secondsToElapse}
      </div>
    )
  },

});
Timer.propTypes = {
  initialStartTime: React.PropTypes.number.isRequired,
  startTimer: React.PropTypes.bool.isRequired,
  onTimerFinished: React.PropTypes.func.isRequired
};
Timer.defaultProps = {
  initialStartTime: 60
};

module.exports = Timer;
