import React from 'react';

var Question = React.createClass({

  _handleTrue() {
    this.props.onAnswer(true);
  },

  render() {
    return (
    <div>
        <p>{this.props.currentQuestion.question}</p>
      <div className='buttons'>
        <button onClick={this._handleTrue}><span>True</span></button>
        <button onClick={() => this.props.onAnswer(false)}><span>False</span></button>
      </div>
    </div>
    );
  }

});
Question.propTypes = {
  currentQuestion: React.PropTypes.shape({
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.bool.isRequired
  }).isRequired,
  onAnswer: React.PropTypes.func.isRequired
};

module.exports = Question;
