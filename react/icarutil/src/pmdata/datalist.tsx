import React from 'react';

const DataList = (props: any) => {
    console.log('In DataList tag');
    return (
        <React.Fragment>
            <div className = 'pm-table-data-row'>
                <label className = 'pm-table-data'>{props.data.asset_id}</label>
                <label className = 'pm-table-data'>{props.data.pm_type}</label>
                <label className = 'pm-table-data'>{props.data.pm_date}</label>
            </div>
        </React.Fragment>
    );

}
export default DataList;