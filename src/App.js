import React, { Component } from 'react'
import Header from './components/Header'
import Game from './components/Game'

export default class App extends Component {
  constructor() {
    super()

    this.state = {
      currentScore : 0,
      bestScore: 0
    }
  }
  render() {
    const {currentScore, bestScore} = this.state;
    return (
      <div>
        <Header currentScore={currentScore} bestScore={bestScore}/>
        <Game />
      </div>
    )
  }
}

