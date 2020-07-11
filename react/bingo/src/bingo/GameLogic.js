import React from 'react';
import './BingoApp.css';

class GameLogic extends React.Component  {
    constructor (props){
        super(props);
        console.log('Inside GameLogic')
        console.log(this.props)
        this.state = {
            attemptLetter : '',
            failedLetters : '',
            successLetters : '',
            challengeWord : '',
            bingoColor : [
                'attempt-left',
                'attempt-left',
                'attempt-left',
                'attempt-left',
                'attempt-left'
            ]
        }

    }
    getBlankText() {
        console.log('inside getBlankText');
        let challengeText = this.props.challenge;
        let size = challengeText.length;
        let challengeChars = challengeText.split('');
        console.log(size);

        return (
            <div className='board-row'>
                <label className={this.state.bingoColor[0]} >B</label>
                <label className={this.state.bingoColor[1]} >I</label>
                <label className={this.state.bingoColor[2]} >N</label>
                <label className={this.state.bingoColor[3]} >G</label>
                <label className={this.state.bingoColor[4]} >O</label>
                <br></br>
                {challengeChars.map((chara, i) => <RenderChallenge guessedchar={chara} visible='true'/>)}
            </div>
        );
    }

    handleSubmit() {
        console.log('In games handle submit');
        console.log(this.state);
        this.validateInputString();

    }

    validateInputString() {
        let challengeText = this.props.challenge;
        let challengeChars = challengeText.split('');
        console.log(challengeChars);
        for (let chara of challengeChars) {
            console.log(chara);
            console.log(this.state.attemptLetter);
            let index = challengeText.indexOf(chara.toUpperCase());
            console.log('Current index = ' + index);
            if (this.state.attemptLetter === chara.toUpperCase()) {
                console.log('Match found');
                alert('Great Job !! you got ' + chara.toUpperCase() + ' at position ' + index);
                this.setState(state => {
                    state.successLetters = this.state.successLetters +chara;
                    return state;

                });
                // this.setState({
                //     successLetters : this.state.successLetters + chara
                // });
            }
            else {
                console.log('Match not found');

                this.setState(state => {
                    state.failedLetters = this.state.failedLetters + chara;
                    return state;

                });
                // this.setState({
                //     failedLetters : this.state.failedLetters + chara
                // });
            }

            console.log(this.state);
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
        console.log ('In Render Challenge')
        console.log (this.props)
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