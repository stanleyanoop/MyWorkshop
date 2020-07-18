import React, { useState } from 'react';
import '../style/pmApp.css'

function PMFilter (){
    const [pmtype, setPmtype] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    return (
        <div className='app'>
            <h1>PM Data List</h1>
            <h2 >PM Filter</h2>
            <form>
                <label>Start Date </label>
                <input
                    className='filter-field'
                    type='Date'
                    onChange= {(event) => setStartDate(event.target.value)}>
                </input>
                <label>End Date </label>
                <input 
                    className='filter-field'
                    type='Date'
                    onChange= {(ev) => setEndDate(ev.target.value)}></input>
                <br/>
                <label>PM Type </label>
                <input
                    className='filter-field'
                    type='text'
                    onChange={(event) => setPmtype(event.target.value)}></input>
                <input 
                    type='submit'
                    value='Filter'></input>
            </form>
        </div>
    )
}

export default PMFilter;