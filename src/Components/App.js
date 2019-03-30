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
import AnswerQuestion from './ReUsableComponents/AnswerQuestion';
import ViewPoll from './ReUsableComponents/ViewPoll';
import ErrorPage from './DashBoard/ErrorPage';

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
              <Route exact path="/answerQuestion/:id" component={AnswerQuestion} />
              <Route exact path="/viewPoll/:id" component={ViewPoll} />
              <Route exact component={ErrorPage} />
            </Switch>
          </Fragment>
        </Router>) : (<SignIn />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
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