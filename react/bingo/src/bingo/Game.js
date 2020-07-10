import React from 'react';

class Game extends React.Component {
    constructor (props) {
        super (props);
        console.log('Game constructor');
        console.log(this.props)
    }

    render(){
        console.log('Inside game')
        console.log(this.props)
        return(
            <div className={this.props.isGameOn}>
                <GameLogic challenge = { this.props.challenge } >
                </GameLogic>
            </div>
        );
    }

}

class GameLogic extends React.Component  {
    getBlankText() {
        console.log('inside getBlankText');
        let challengeText = this.props.challenge;
        let size = challengeText.length;
        console.log(size);

        return (

            <h1>for text</h1>
        );
    }

    render() {
        return(
            <div>
                <h3>Guess a letter</h3>
                <div className='board-row' >
                    {this.getBlankText()}
                </div>
    
            </div>
        );
    
    }

}

export default Game;