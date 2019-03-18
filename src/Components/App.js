import React, { Component, Fragment } from 'react';
import '../App.css';
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './DashBoard/Home';
import SignIn from './Auth/SignIn';
import { GET_USERS } from '../Store/Actions/AuthActions';
import { GET_QUESTIONS } from '../Store/Actions/QuestionsActions';

class App extends Component {
  componentDidMount(){
    this.props.getUsers();
    this.props.getQuestions();
  }
  render() {
    return (
      <div className="App">
      {this.props.userFlag ? (<Router>
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
      </Router>) : (<SignIn />)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return{
    user: state.auth.currentUser,
    userFlag: state.auth.currentUserFlag,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers : () => dispatch(GET_USERS()),
    getQuestions: () => dispatch(GET_QUESTIONS()),
  }
} 
export default connect(mapStateToProps, mapDispatchToProps)(App);
