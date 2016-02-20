var React = require('react');
import {browserHistory} from 'react-router';

var Questionpane = React.createClass({

	getInitialState: function(){
		return {
			input: '',
			questions: ['   What is the meaning of life? ', '  Why? ', '  Whats the answer to the universe?']
		}
	},

	render: function(){
		return (

        <div className='main'>
            <form className='questionpane'>
                <p>
                    {this.state.questions[0]}
                </p>
              <input type='text' placeholder='  enter answer here'/>
            </form>
        </div>
    )
  }
});


module.exports = Questionpane;
