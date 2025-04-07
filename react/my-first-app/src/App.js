import React from 'react';
// import logo from './logo.svg';
// import logo from './img.jpeg'
import './App.css';

class App extends React.Component {
  render () {
    return (
      <div>
        <Header></Header>
        <DataList></DataList>
      </div>
    );  
  }
}

class Header extends React.Component {
  render (){
    return (
      <div className='Header-style'>
        <h1>PM List</h1>
      </div>
    );
  }
}

class DataList extends React.Component {
  constructor(){
    super();
    this.state = {
      pm_items : [
        {
            "asset_id": "1LS1MR2",
            "pm_type": "ACQ DELL 5820",
            "pm_date": "2020-02-07"
        },
        {
            "asset_id": "2UA9500LL2",
            "pm_type": "ACQ HP Z600",
            "pm_date": "2020-02-05"
        },
        {
            "asset_id": "SG409470005GP",
            "pm_type": "GECW",
            "pm_date": "2020-05-06"
        },
        {
            "asset_id": "060WUL 8953",
            "pm_type": "Isolation Transformer",
            "pm_date": "2020-05-04"
        },
        {
            "asset_id": "A282.00.002.378",
            "pm_type": "ITU",
            "pm_date": "2020-02-03"
        }
      ]
    }

  }
  render(){
    console.log("ANoop here")
    console.log(this.state.pm_items)
    return (
      <table className="tableStyle">
        <thead>
            <tr>
              <th>PM Item</th>
              <th>Asset #</th>
              <th>Date</th>
            </tr>
        </thead>
        <tbody>
            {this.state.pm_items.map((pm_item, i) => <TableData key = {i} value = {pm_item} ></TableData>)}
        </tbody>
      </table>
    );
  }
}

class TableData extends React.Component {
  render () {
    console.log("TableData");
    console.log(this.props.value.asset_id)
    return (
      <tr>
        <td> {this.props.value.pm_type} </td>
        <td> {this.props.value.asset_id} </td>
        <td> {this.props.value.pm_date} </td>
      </tr>
    );
  }
}

export default App;
