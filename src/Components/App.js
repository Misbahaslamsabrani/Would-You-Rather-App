import React, { Component, Fragment } from 'react';
import '../App.css';
import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './Navbar/Navbar';
import Home from './DashBoard/Home';
import SignIn from './Auth/SignIn';
import { GET_USERS } from '../Store/Actions/AuthActions';
import { GET_QUESTIONS } from '../Store/Actions/QuestionsActions';
import LeaderBoard from './DashBoard/LeaderBoard';
import NewQuetion from './DashBoard/NewQuetion';

class App extends Component {
  componentDidMount() {
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
              <Route exact path="/" component={Home} />
              <Route exact path="/leaderBoard" component={LeaderBoard} />
              <Route exact path="/newQuestion" component={NewQuetion} />
            </Switch>
          </Fragment>
        </Router>) : (<SignIn />)}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    user: state.auth.currentUser,
    userFlag: state.auth.currentUserFlag,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => dispatch(GET_USERS()),
    getQuestions: () => dispatch(GET_QUESTIONS()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);





{/*  <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} /> 
        <Route path="" component={} />  */}