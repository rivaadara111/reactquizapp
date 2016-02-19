var React = require('react');

var Welcomepage = React.createClass({

  takeTest(){
    this.props.history.push('/take-test');
  },

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
          <button className='testbutton' onClick={this.takeTest}><span>TAKE TEST</span></button>

        </div>



      </div>

    )
  }
});


module.exports = Welcomepage;
