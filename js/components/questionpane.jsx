var React = require('react');
import {browserHistory} from 'react-router';
import Question from './question.jsx';

var Questionpane = React.createClass({

	getInitialState: function(){
		return {
			correctCount: 0,
			questionIndex: 0
		};
	},

	componentWillUpdate(nextProps, nextState) {
		if (nextState.questionIndex === nextProps.questions.length) {
			this.state.correctCount === 2
				? this.props.onCorrect()
				: this.props.onFailure();
		}
	},

	render() {
		return (
      <div className='main'>
				<Question
					currentQuestion={this.props.questions[this.state.questionIndex]}
					onAnswer={this._handleUserAnswer}/>
      </div>
    )
  },

	_handleUserAnswer(userAnswer) {
		var correctAnswer = this.props.questions[this.state.questionIndex].answer;
		var currentCorrectCount = this.state.correctCount;

		if (correctAnswer === userAnswer) {
			currentCorrectCount = currentCorrectCount + 1;
		}

		this.setState({
			correctCount: currentCorrectCount,
			questionIndex: this.state.questionIndex + 1
		});
	}

});

Questionpane.propTypes = {
	questions: React.PropTypes.arrayOf(
		React.PropTypes.shape({
			question: React.PropTypes.string.isRequired,
			answer: React.PropTypes.bool.isRequired
		}).isRequired
	).isRequired
};

module.exports = Questionpane;
