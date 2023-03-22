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

        this.handleAnswer = this.handleAnswer.bind(this);
    }

    handleAnswer(event, item, index, answer){

        console.log(item.displayed, answer)
        this.props.handleScore(item.displayed === answer)

            const items = this.state.items.map((i) => {
                if(i === item){

                    if(i.displayed){
                        return i
                    } else {
                        i.displayed = true;
                        return i;
                    }
                } else return i
            })
            this.setState({ items })
    }

    randomItem(){
        let rand = Math.floor(Math.random() * items.length)
        return rand
    }

    render() {
        const {items} = this.state;
        const index = this.randomItem()
        const item = items[index]
    return (
      <main className='game'>
        <p id={index}>{item.content}</p>
        <Prompt handleAnswer={this.handleAnswer} index={index} item={item} />
      </main>
    )
  }
}
