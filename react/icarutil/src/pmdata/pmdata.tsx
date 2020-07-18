import React from 'react';
import PMFilter from './pmfilter'
import PMDataTable from './pmdatatable'
import '../style/pmApp.css'

function PMData(){
    return(
        <React.Fragment>
            <div className='app'>
                <PMFilter></PMFilter>
            </div>
            <PMDataTable></PMDataTable>
        </React.Fragment>
    );
}

export default PMData;