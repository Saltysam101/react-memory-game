import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    const {currentScore, bestScore} = this.props;
    return (
      <div className='header'>
        <h1>Memory Game</h1>
        <div className='header-group'>
            <p>Current Score</p>
            <p>{currentScore}</p>
        </div>
        <div className='header-group'>
            <p>Best Score</p>
            <p>{bestScore}</p>
        </div>
      </div>
    )
  }
}
