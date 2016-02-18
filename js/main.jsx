var React = require('react');
var ReactDOM = require('react-dom');

var Quiz = React.createClass({

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
      <button className='testbutton'><span>TAKE TEST</span></button>
      <button className='testbutton'><span>BEGIN EVALUATION</span></button>
    </div>



  </div>

    )
  }
});

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
  this.setState({secondsToElapse: this.state.secondsElapsed - 1 });
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
        00:{this.state.secondsElapsed}
      </div>
    )
 },

});

ReactDOM.render(<Quiz />, document.querySelector('#quiz-app'));
