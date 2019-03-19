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
        const {postedBy, question} = this.props;
        return (
            <div className="container">
                <br />
                <div className="row">
            <div className="col s12 m10 l7 offset-l2 offset-m2">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={postedBy.avatarURL} alt="userPic" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="card-title purple-text">Asked by {postedBy.name}: </div>
                            <p className="grey-text darken-4 flow-text"><b>Results:</b></p>
                            <ul className="collection">
                            <li className="collection-item">Would you rather {question.optionOne.text} ?</li>
                            <li className="collection-item">Would you rather {question.optionOne.text} ?</li>
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
    const question = state.que.AllQuestions.find(v => v.id === questionId);
    const postedBy = state.auth.AllUsers.find(v => v.id === question.author);
    return {
        question,
        postedBy
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
      getUsers: () => dispatch(GET_USERS()),
      getQuestions: () => dispatch(GET_QUESTIONS()),
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ViewPoll);