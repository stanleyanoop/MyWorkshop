import React from 'react';
import DataList from './datalist';
import '../style/pmApp.css'

const PMDataTable = () => {
    //TODO: This list has to come from a rest call.
    let pmDataList: any[] = require('../data/PMData.json')
    console.log(pmDataList);

    return(
        <div>
            <div className='table' >
                <div >
                    <label className = 'pm-table-header'>Asset ID</label>
                    <label className = 'pm-table-header'>PM Type</label>
                    <label className = 'pm-table-header'>PM Date</label>
                </div>
                {pmDataList.map((pmData: any, i: number) => <DataList data={pmData}/>)}                
            </div>
        </div>
    );
}
export default PMDataTable;
