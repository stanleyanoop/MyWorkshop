import React from 'react';
import BingoGame from './Game'
import './BingoApp.css';

class BingoApp extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      challengeWord : '',
      isGameOn : false
    }
  }

  handleSubmit(){
    this.setState ({
      challengeWord : this.state.challengeWord,
      isGameOn : true
    });
    // playBingo(this.state.challengeWord);
  }

  refreshPage () {
    window.location.reload();
    this.setState ({
      isGameOn : false,
      challengeWord : ''})
  }

  render() {
    return (
          <div>
            <div className= {this.state.isGameOn ? 'word-sel' : 'guess'} >
              <h1>Play Bingo</h1>
              <h3>Enter your Bingo word!!</h3>
              <input type="password" 
                value={this.state.challengeWord} 
                onChange={(event) => this.setState( {challengeWord : event.target.value.toUpperCase()}) }></input>
              <p></p>
              <button onClick={ () => this.handleSubmit() }>Submit</button>
            </div>
            <BingoGame 
              isGameOn = {this.state.isGameOn ? 'guess' : 'word-sel'} 
              challenge = {this.state.challengeWord} />
            <button  onClick = { () => this.refreshPage()} > Home </button>
        </div>
    );
  }
  
}
// function playBingo(challengeWord) {
//   return(
//     <BingoGame/>
//   );
// }
export default BingoApp;
