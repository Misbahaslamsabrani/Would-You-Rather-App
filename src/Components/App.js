import React, { Component, Fragment } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './DashBoard/Home';

class App extends Component {
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
      <Router>
        <Fragment>
          <Navbar />
        <Switch>
        <Route path="/" component={Home} />
        {/* <Route path="/leaderBoard" component={} /> 
        <Route path="newQuestion" component={} /> 
        <Route path="logout" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} />  */}
        </Switch>
        </Fragment>
      </Router>
      </div>
    );
  }
}

export default connect()(App);
