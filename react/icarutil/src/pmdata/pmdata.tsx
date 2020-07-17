import React, { useState } from 'react';
import PMFilter from './pmfilter'
import PMDataTable from './pmdatatable'
import '../style/pmApp.css'

function PMData(){
    return(
        <div className='pm-data-app'>
            <h1>PM Data List</h1>
            <PMFilter></PMFilter>
            <PMDataTable></PMDataTable>
        </div>
    );
}

export default PMData;