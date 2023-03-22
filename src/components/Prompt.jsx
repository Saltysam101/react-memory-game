import React, { Component } from 'react'

export default class Prompt extends Component {
  render() {
    const {item, handleAnswer, index} = this.props;
    return (
      <div className="prompt">
        <div>
            <p>
                Have You Seen This Letter?
            </p>
                <button onClick={(e) => handleAnswer(e, item, index, true)}>Yes</button>
                <button onClick={(e) => handleAnswer(e, item, index, false)}>No</button>
        </div>
      </div>
    )
  }
}
