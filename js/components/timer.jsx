var React = require('react');

var Timer = React.createClass({

  getInitialState: function(){
    return {
      secondsToElapse:  60
    }
  },
  //
  startTimer: function(){
      this.interval = setInterval(this.tick, 1000);
  //  this.startTimer();
  },

  //return minutes and seconds in seperate functions
  renderMinutes: function(){

  },

  renderSeconds: function(){

  },

  resetTimer: function(){
   clearInterval(this.interval);
  //  this.setState({ secondsToElapse: 0 });
   if (this.state.secondsToElapse === 0){
    clearInterval()}
  },

  tick: function(){
  this.setState({secondsToElapse: this.state.secondsToElapse - 1 });
  if (this.state.secondsToElapse <= 0) {
  clearInterval(this.interval);
    }
  },

  clearInterval: function(){
  if(this.state.secondsRemaining === 0){
    this.resetTimer();
    }
  },

  componentWillReceiveProps: function(newTimerOnProps) {
    if(newTimerOnProps.start === true) {
      this.startTimer();
    }
  },

  render: function(){
    return (
      <div className='timer'>
        00:{this.state.secondsToElapse}
      </div>
    )
 },

});

module.exports = Timer;
