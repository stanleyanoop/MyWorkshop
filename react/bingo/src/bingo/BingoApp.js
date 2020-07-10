import React from 'react';
import BingoGame from './Game'
import './BingoApp.css';
// import { render } from '@testing-library/react';

class BingoApp extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      challengeWord : '',
      isGameOn : false
    }
  }

  handleSubmit(){
    alert("Entering the word for Bingo..." + this.state.challengeWord);
    console.log("Anoop")
    console.log(this.state)
    this.setState ({
      challengeWord : this.state.challengeWord,
      isGameOn : true
    })
    // document.getElementById("bingo").setAttribute("className", "guess")
    playBingo(this.state.challengeWord);
  }

  render() {
    return (
         <div className= {this.state.isGameOn ? 'word-sel' : 'guess'} >
          <h1>Play Bingo</h1>
          <h3>Enter your Bingo word!!</h3>
          <input type="password" 
            value={this.state.challengeWord} 
            onChange={(event) => this.setState( {challengeWord : event.target.value}) }></input>
          <p></p>
          <button onClick={ () => this.handleSubmit() }>Submit</button>
          <BingoGame 
            isGameOn = {this.state.isGameOn ? 'guess' : 'word-sel'} 
            challenge = {this.state.challengeWord} />
        </div>
    );
  }
  
}
function playBingo(challengeWord) {
  console.log('inside playbingo');
  return(
    <BingoGame/>
  );
}
export default BingoApp;
