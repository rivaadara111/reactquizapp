import React from 'react';
import {browserHistory} from 'react-router';

var Timer = React.createClass({

  getInitialState(){
    return {
      secondsToElapse: this.props.initialStartTime
    };
  },

  componentWillReceiveProps(nextProps) {
    if (nextProps.startTimer) this._startTimer();
  },

  componentDidUpdate(prevProps, prevState) {
    if (this.state.secondsToElapse === 0) this.props.onTimerFinished();
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  _decrementCounter() {
    this.setState({secondsToElapse: this.state.secondsToElapse - 1});
  },

  _startTimer(){
    this.interval = setInterval(this._decrementCounter, 1000);
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
