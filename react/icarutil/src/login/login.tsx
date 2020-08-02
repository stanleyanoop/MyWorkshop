import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import '../style/pmApp.css'

const Login = () => {
    const [userName, setName] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const history = useHistory();
    
    const handleSubmit = (event: any) => {
        alert ('User userName : ' + userName);
        setIsLoggedIn(validateCredentials(userName, password));
        console.log(isLoggedIn);
        if (isLoggedIn){
            console.log('Logged in');

            history.push('/pmdata');
        } else {
            console.log('Invalid log in');
            alert ('Invalid credentials. Please try again');
            history.push('/login');

        }
        event.preventDefault();
    }
    
    const validateCredentials = (userName: string, pwd: string) => {
        if (userName === 'test' && pwd === '123'){
            return true;
        } else {
            return false;
        }
    }
    
    const handleNameChangeEvent = (event: any) => {
        setName( (event.target.value));
    }
    const handlePwdChangeEvent = (event: any) => {
        setPassword(event.target.value)
    }
    return(
        <div className='app'>
            <h1>PM Data Application</h1>
            <form onSubmit={(event) => handleSubmit(event)}>
            <label>User userName : </label>
                <input 
                    // className='login'
                    type='text'
                    placeholder='Enter your userName...'
                    onChange={(event) => handleNameChangeEvent(event)}
                    value = {userName}></input>
                <br></br>
                <label>Password : </label>
                <input 
                    // className='login'
                    type='password'
                    onChange={(event) => handlePwdChangeEvent(event)}
                    value = {password}></input>
                <br></br>
                <input 
                    type='submit' 
                    value='Login' 
                    disabled ={!(userName.length > 0 && password.length > 0)}></input>
            </form>

        </div>
    );
}



export default Login;