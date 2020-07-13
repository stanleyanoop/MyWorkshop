import React from 'react';
import './BingoApp.css';

class GameLogic extends React.Component  {
    constructor (props){
        super(props);
        this.maskedChars = [];

        this.state = {
            attemptLetter : '',
            failedLetters : '',
            successLetters : '',
            challengeWord : [],
            maskedWord : [],
            bingoColor : [
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
        if (isInit){
            isInit = false;
            maskedChars = [];
            for (let i = 0; i < size ; i++){
                maskedChars.push('*');
            }
        } else {
            maskedChars = this.state.maskedWord;
        }
        this.maskedChars = maskedChars;
        console.log(this.maskedChars);
        console.log ('masked word');
        console.log(this.state.maskedWord)

        return (
            <div className='board-row'>
                <label className={this.state.bingoColor[0]} >B</label>
                <label className={this.state.bingoColor[1]} >I</label>
                <label className={this.state.bingoColor[2]} >N</label>
                <label className={this.state.bingoColor[3]} >G</label>
                <label className={this.state.bingoColor[4]} >O</label>
                <br></br>
                {maskedChars.map((chara, i) => <RenderChallenge guessedchar={chara} visible='true'/>)}
            </div>
        );
    }

    handleSubmit = () => {
        this.validateInputString();
    }

    validateInputString = () => {
        let challengeText = this.props.challenge;
        let challengeChars = challengeText.split('');
        let index = challengeText.indexOf(this.state.attemptLetter);
        console.log('Current index = ' + index);
        let success = true;
        let successLetters = this.state.successLetters;
        let failedLetters = this.state.failedLetters;
        if (index !== -1){
            this.gameOn(challengeChars);
            success = true;
            successLetters = successLetters + this.state.attemptLetter;
            
        } else {
            success = false;
            failedLetters = failedLetters + this.state.attemptLetter;
        }
        console.log('masked chars going to the state')
        console.log(this.maskedChars)
        this.setState({
            failedLetters : failedLetters,
            successLetters : successLetters,
            challengeWord: challengeChars,
            maskedWord: this.maskedChars,

        }, () => console.log(this.state));

    }

    gameOn = (challengeChars) => {
        let i = 0;
        for (let chara of challengeChars) {
            i++;
            console.log(this.state.maskedWord);
            if (this.state.attemptLetter === chara.toUpperCase()) {
                console.log('****************Match found');
                console.log(this.state.maskedWord);
                let temp = [];
                let j = 0;
                for (let c of this.maskedChars){
                    j++;
                    console.log('test********')
                    console.log(c) ;
                    if (c === '*'){
                        if (i === j){
                            temp.push(this.state.attemptLetter);
                        } else {
                            temp.push('*');
                        }

                    } else {
                        temp.push(c);
                    }
                }
                console.log(temp);
                this.maskedChars = temp;
                alert('Great Job !! you got ' + chara.toUpperCase() + ' at position ' + i);               
            }
        }
    }

    render() {
        return(
            <div>
                <h3>Guess a letter</h3>
                <input
                    className='guess-letter' 
                    maxLength = '1'
                    type="text" 
                    value={this.state.attemptLetter} 
                    onChange={(event) => this.setState( {attemptLetter : event.target.value.toUpperCase()}) }></input>
                
                <button onClick={ () => this.handleSubmit() }>Enter</button>
               <div>
                    {this.getBlankText()}
                </div>
    
            </div>
        );
    
    }

}

class RenderChallenge extends React.Component{

    render(){
        // console.log ('In Render Challenge')
        // console.log (this.props)
        return (
            <div className='board-row-input'>
                {/* <input 
                    className = 'bingo-answer' 
                    value = {this.props.visible === 'true' ? this.props.guessedchar.toUpperCase() : '**'}>
                </input> */}
                <label className='bingo-answer'>
                    {this.props.visible === 'true' ? this.props.guessedchar.toUpperCase() : '*'}
                </label>
                <label>{'-'}</label>
            </div>
        );
    
    }
}

export default GameLogic;