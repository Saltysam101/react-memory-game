import React, { Component } from 'react'

export default class Prompt extends Component {
  render() {
    const {item} = this.props;
    return (
      <div className="prompt">
        <div>
            <p>
                Have You Seen This Letter?
            </p>
                <button>Yes</button>
                <button>No</button>
        </div>
      </div>
    )
  }
}
