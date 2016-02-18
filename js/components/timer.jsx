var React = require('react');

var Timer = React.createClass({

  getInitialState: function(){
    return {
      secondsToElapse:  60
    }
  },

  //return minutes and seconds in seperate functions
  renderMinutes: function(){

  },

  renderSeconds: function(){

  },

  resetTimer: function(){
   clearInterval(this.interval);
   this.setState({ secondsToElapse: 0 });
   this.start();
 },

  tick: function(){
  this.setState({secondsToElapse: this.state.secondsToElapse - 1 });
  },

  start: function(){
      this.interval = setInterval(this.tick, 1000);
  },

  componentDidMount: function(){
   setTimeout(this.start, this.props.timeout);
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
