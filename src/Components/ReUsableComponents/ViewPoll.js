import React, { Component } from 'react';
import { connect } from 'react-redux';
import { GET_USERS } from '../../Store/Actions/AuthActions';
import { GET_QUESTIONS } from '../../Store/Actions/QuestionsActions';
import BadgeCom from './Badge';
class ViewPoll extends Component {
    componentDidMount() {
        this.props.getUsers();
        this.props.getQuestions();
    }
    render() {
        const { postedBy, question, first, second, total, perOne, perTwo, cUserId } = this.props;
        return (
            <div className="container">
                <br />
                <div className="row">
                    <div className="col s12 m10 l8 offset-l2 offset-m2">
                        <div className="card horizontal">
                            <div className="card-image">
                                <img src={postedBy.avatarURL} alt="userPic" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="card-title purple-text">Asked by {postedBy.name}: </div>
                                    <p className="grey-text darken-4 flow-text">
                                        <b>Results:</b>
                                    </p>
                                    <ul className="collection">
                                        <li className="collection-item">
                                            <div className="black-text">
                                                <b> Would you rather {question.optionOne.text} ? </b>
                                                {question.optionOne.votes.some(v => v === cUserId) && <span className="badge purple lighten-1 white-text">Your Vote</span>}
                                            </div>
                                            <br />
                                            <div className="progress" style={{ width: `${perOne}%`, backgroundColor: "purple" }}>
                                            </div>
                                            <BadgeCom value={`${first} out of ${total} votes.`} badgeText={`${perOne}%`} />
                                        </li>
                                        <li className="collection-item">
                                            <div className="black-text">
                                                <b> Would you rather {question.optionTwo.text} ? </b>
                                                {question.optionTwo.votes.some(v => v === cUserId) && <span className="badge purple lighten-1 white-text">Your Vote</span>}
                                            </div>
                                            <br />
                                            <div className="progress" style={{ width: `${perTwo}%`, backgroundColor: "purple" }}>
                                            </div>
                                            <BadgeCom value={`${second} out of ${total} votes.`} badgeText={`${perTwo}%`} />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    const questionId = ownProps.match.params.id;
    const cUserId = state.auth.currentUser.id;
    const question = state.que.AllQuestions.find(v => v.id === questionId);
    const postedBy = state.auth.AllUsers.find(v => v.id === question.author);
    const first = question.optionOne.votes.length;
    const second = question.optionTwo.votes.length;
    const total = first + second
    const perOne = Math.round(first / total * 100);
    const perTwo = Math.round(second / total * 100);
    return {
        question,
        postedBy,
        first,
        second,
        total,
        perOne: isNaN(perOne) ? 0 : perOne,
        perTwo: isNaN(perTwo) ? 0 : perTwo,
        cUserId,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getUsers: () => dispatch(GET_USERS()),
        getQuestions: () => dispatch(GET_QUESTIONS()),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);