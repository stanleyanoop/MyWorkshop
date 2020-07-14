import React from 'react';
import './BingoApp.css';
import { cleanup } from '@testing-library/react';

class GameLogic extends React.Component {
    constructor(props) {
        super(props);
        this.maskedChars = [];

        this.state = {
            attemptLetter: '',
            failedLetters: '',
            successLetters: '',
            challengeWord: [],
            maskedWord: [],
            isGameOver : false,
            bingoColor: [
                'attempt-left',
                'attempt-left',
                'attempt-left',
                'attempt-left',
                'attempt-left'
            ]
        };

    }
    getBlankText = () => {
        let challengeText = this.props.challenge;
        let size = challengeText.length;
        let challengeChars = challengeText.split('');
        let isInit = true;
        let maskedChars = [];
        if (isInit) {
            isInit = false;
            maskedChars = [];
            for (let i = 0; i < size; i++) {
                maskedChars.push('*');
            }
        } else {
            maskedChars = this.state.maskedWord;
        }
        this.maskedChars =  (this.state.maskedWord.length === 0 
            ? maskedChars : this.state.maskedWord);

        return (
            <div className='board-row'>
                <label className={this.state.bingoColor[0]} >B</label>
                <label className={this.state.bingoColor[1]} >I</label>
                <label className={this.state.bingoColor[2]} >N</label>
                <label className={this.state.bingoColor[3]} >G</label>
                <label className={this.state.bingoColor[4]} >O</label>
                <br></br>
                {this.maskedChars.map((chara, i) =>
                    <RenderChallenge
                        guessedchar={chara}
                        visible='true' />)} 
                <br />
                <h4>Wrongly Guessed Letters </h4>
                <label className='bingo-wrong-answer'>
                    {this.state.failedLetters.toUpperCase()}
                </label>

            </div>
        );
    }

    handleSubmit = () => {
        if (this.state.isGameOver !== true) {
            if (this.state.successLetters.includes(this.state.attemptLetter) 
                || this.state.failedLetters.includes(this.state.attemptLetter)) {
                alert('This letter was already attempted. Please try again.');
                this.setState({
                    attemptLetter : ''
                })
            } else {
                this.validateGameRule();
                this.setState({
                    attemptLetter : ''
                })
            }

        } else {
            const gameOver = 'Game Over!!. \nClick on the Home button to play again.'
            alert (gameOver);
        }
    }

    validateGameRule = () => {
        let challengeText = this.props.challenge;
        let challengeChars = challengeText.split('');
        let index = challengeText.indexOf(this.state.attemptLetter);
        let success = true;
        let successLetters = this.state.successLetters;
        let failedLetters = this.state.failedLetters;
        let bingoColor = this.state.bingoColor;
        if (index !== -1) {
            this.gameOn(challengeChars, challengeText);
            success = true;
            successLetters = successLetters + this.state.attemptLetter;

        } else {
            success = false;
            failedLetters = failedLetters + this.state.attemptLetter;
            let failedLetCnt = failedLetters.length;
            for (let cnt = 0; cnt < 5; cnt++) {
                if (cnt < failedLetCnt) {
                    bingoColor.splice(cnt, 1, 'attempt-over');
                } else {
                    bingoColor.splice(cnt, 1, 'attempt-left');
                }
            }
            if (failedLetCnt === 5) {
                alert('BINGO!!! You missed to guess the word ' 
                    + challengeText + '. Better luck next time!');
                this.cleanUp();
            }
    
        }
        this.setState({
            failedLetters: failedLetters,
            successLetters: successLetters,
            challengeWord: challengeChars,
            maskedWord: this.maskedChars,
            bingoColor : bingoColor

        }, () => console.log(this.state));

    }

    cleanUp = () => {
        this.setState (
            {
                attemptLetter: '',
                failedLetters: '',
                successLetters: '',
                challengeWord: [],
                maskedWord: [],
                isGameOver : true,
                bingoColor: [
                    'attempt-left',
                    'attempt-left',
                    'attempt-left',
                    'attempt-left',
                    'attempt-left'
                ]
            }
        );        
    }
    gameOn = (challengeChars, challengeText) => {
        let i = 0;
        for (let chara of challengeChars) {
            i++;
            console.log(this.state.maskedWord);
            if (this.state.attemptLetter === chara.toUpperCase()) {
                let temp = [];
                let j = 0;
                for (let c of this.maskedChars) {
                    j++;
                    if (c === '*') {
                        if (i === j) {
                            temp.push(this.state.attemptLetter);
                        } else {
                            temp.push('*');
                        }

                    } else {
                        temp.push(c);
                    }
                }
                this.maskedChars = temp;
                if (this.maskedChars.indexOf('*') === -1) {
                    alert('Great Job !! you got ' + chara.toUpperCase() + ' at position ' + i);
                    alert('Congratulations!!! You have guessed the word right. It is ' +
                        challengeText);
                    this.cleanUp();
                }else {
                    alert('Great Job !! you got ' + chara.toUpperCase() + ' at position ' + i);
                }
            }
        }
    }

    render() {
        return (
            <div>
                <h3>Guess a letter</h3>
                <input
                    className='guess-letter'
                    maxLength='1'
                    type="text"
                    value={this.state.attemptLetter}
                    onChange={(event) => this.setState({ attemptLetter: event.target.value.toUpperCase() })}></input>

                <button className='button-style' onClick={() => this.handleSubmit()}> Enter </button>
                <div>
                    {this.getBlankText()}
                </div>

            </div>
        );

    }

}

class RenderChallenge extends React.Component {

    render() {
        return (
            <div className='board-row-input'>
                <label className='bingo-answer'>
                    {this.props.guessedchar.toUpperCase()}
                </label>
                <label>{'-'}</label>
            </div>
        );

    }
}

export default GameLogic;