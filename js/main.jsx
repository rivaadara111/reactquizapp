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
      <button className='testbutton'><span>TAKE TEST</span></button>
      <button className='testbutton'><span>BEGIN EVALUATION</span></button>
    </div>

  </div>

    )
  }
});

ReactDOM.render(<Quiz />, document.querySelector('#quiz-app'));
