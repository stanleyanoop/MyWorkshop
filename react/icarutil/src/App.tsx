import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './login/login'
import './App.css';
import PMData from './pmdata/pmdata';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Login}></Route>
      <Switch>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/pmdata" component={PMData}></Route>
      </Switch>
    </Router> 
  );
}

export default App;
