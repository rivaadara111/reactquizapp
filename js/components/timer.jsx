var React = require('react');

var Timer = React.createClass({

  getInitialState: function(){
    return {
      secondsToElapse:  60
    }
  },

  startTimer: function(){
      this.interval = setInterval(this.tick, 1000);
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

  componentWillReceiveProps: function(newStartProps) {
    if(newStartProps.start === true) {
      this.startTimer();
    }
  },

  slideTimer: function(){
  return this.props.start ? "timer" : "timer hidden"
  },

  render: function(){
    return (
      <div className={this.slideTimer()}>
        00:{this.state.secondsToElapse}
      </div>
    )
 },

});

module.exports = Timer;

//return minutes and seconds in seperate functions
// renderMinutes: function(){
//
// },
//
// renderSeconds: function(){
//
// },
