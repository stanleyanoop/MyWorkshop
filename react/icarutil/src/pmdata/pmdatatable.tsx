import React from 'react';
import '../style/pmApp.css'

function PMDataTable () {
    return(
        <div>
            <h3>PM Data Table</h3>
            <div className = 'pm-table-header'>
                <label >Asset ID</label>
                <label >PM Type</label>
                <label >PM Date</label>
            </div>
        </div>
    );
}

export default PMDataTable;