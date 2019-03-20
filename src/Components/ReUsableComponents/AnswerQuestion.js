import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from "../ReUsableComponents/Question";
import { ADD_ANSWER } from '../../Store/Actions/QuestionsActions';
class AnswerQuestion extends Component {
    state = {
        selectedAnswer: "",
    }
    whenSubmit = (quId) => {
        if (this.state.selectedAnswer === "") {
            return;
        }
        this.props.addAnswer(this.props.cUser.id, quId, this.state.selectedAnswer);
        this.setState({ selectedAnswer: "" })
        this.props.history.push(`/viewPoll/${quId}`)
    }
    whenSelected = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    whenEmpty = () => {
        return this.state.selectedAnswer === ""
    }
    render() {
        const { qu,
            pb } = this.props;
        return (
            <div className="container">
                <br />
                <Question
                    key={qu.id}
                    question={qu}
                    postedBy={pb}
                    oc={this.whenSubmit}
                    wc={this.whenSelected}
                    bText="Submit"
                    check="AnswerQuestion"
                    we={this.whenEmpty}
                />
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const QuestionId = ownProps.match.params.id;
    const qu = state.que.AllQuestions.find(v => v.id === QuestionId);
    const pb = state.auth.AllUsers.find(v => v.id === qu.author);
    return {
        qu,
        cUser: state.auth.currentUser,
        pb,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addAnswer: (uid, qid, ans) => dispatch(ADD_ANSWER(uid, qid, ans)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AnswerQuestion);