import React, { useState } from 'react';
import '../style/pmApp.css'

function PMFilter (){
    const [pmtype, setPmtype] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    return (
        <div>
            <h2 >PM Filter</h2>
            <form>
                <label>PM Type </label>
                <input
                    type='text'
                    onChange={(event) => setPmtype(event.target.value)}></input>
                <label>Start Date </label>
                <input
                    type='Date'
                    onChange= {(event) => setStartDate(event.target.value)}>
                </input>
                <label>End Date </label>
                <input 
                    type='Date'
                    onChange= {(ev) => setEndDate(ev.target.value)}></input>
                <input 
                    type='submit'
                    value='Filter'></input>
            </form>
        </div>
    )
}

export default PMFilter;