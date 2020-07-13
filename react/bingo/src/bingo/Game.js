import React from 'react';
import GameLogic from './GameLogic'

import './BingoApp.css';

class Game extends React.Component {

    render(){
        return(
            <div className={this.props.isGameOn}>
                <GameLogic challenge = { this.props.challenge } >
                </GameLogic>
            </div>
        );
    }

}

export default Game;