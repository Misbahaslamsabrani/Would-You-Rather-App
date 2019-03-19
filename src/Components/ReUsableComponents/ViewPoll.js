import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_USERS } from '../../Store/Actions/AuthActions';
import { GET_QUESTIONS } from '../../Store/Actions/QuestionsActions';
class ViewPoll extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getQuestions();
    }
    render() {
        return (
            <div className="container">

            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.id;
    const question = state.que.AllQuestions.find(v => v.id === questionId)
    console.log(questionId, question)
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => dispatch(GET_USERS()),
      getQuestions: () => dispatch(GET_QUESTIONS()),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);