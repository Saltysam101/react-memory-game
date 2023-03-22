import React, { Component } from 'react'
import Prompt from './Prompt';


const items = [];

for (let i = 65; i< 75; i++){
    items.push({
        id: i,
        content: String.fromCharCode(i),
        displayed: false,
    })
}

export default class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            items
        }
    }

    randomItem(){
        let rand = Math.floor(Math.random() * items.length)
        return rand
    }

    render() {
        const {items} = this.state;
    return (
      <main>
        <p>{items[this.randomItem()].content}</p>
        <Prompt />
      </main>
    )
  }
}
