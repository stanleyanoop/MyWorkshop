import React from 'react';
import DataTable from 'react-data-table-component';
import DataList from './datalist';
import '../style/pmApp.css'

const PMDataTable = () => {
    //TODO: This list has to come from a rest call.
    let pmDataList: any[] = require('../data/PMData.json');
    const columns: any[] = ['Asset ID', 'PM Type', 'PM Date']
    console.log(pmDataList);

    return(
        <div>
            {/* <DataTable
            title='PM Data List'
            columns={columns}
            data={pmDataList}/> */}
            <div className = 'pm-table-header'>
                <label className = 'pm-table-header'>Asset ID</label>
                <label className = 'pm-table-header'>PM Type</label>
                <label className = 'pm-table-header'>PM Date</label>
            </div>
            <div className='table' >
                {pmDataList.map((pmData: any, i: number) => <DataList data={pmData}/>)}                
            </div>
        </div>
    );
}
export default PMDataTable;
