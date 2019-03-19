import React, { Component } from 'react';
import TabBar from '../ReUsableComponents/TabBar';
import Question from '../ReUsableComponents/Question';
import { connect } from 'react-redux';
class Home extends Component {
    state = {
        value: 0,
    }
    handleChange = (event, value) => {
        this.setState({ value });
    };
    changeRoute = (qId) => {
        this.state.value === 0 ? this.props.history.push(`/answerQuestion/${qId}`) : 
        (this.props.history.push(`/viewPoll/${qId}`));
     };
    render() {
        const { value } = this.state;
        const { answeredQuestions, unAnsweredQuestions, allUsers } = this.props;
        const Questions = value === 0 ? unAnsweredQuestions : answeredQuestions;
        return (
            <div className="container">
                <TabBar
                    wc={this.handleChange}
                    value={value}
                />
                {
                    Questions.map(v => <Question
                        key={v.id}
                        question={v}
                        postedBy={allUsers.find(u => v.author === u.id)}
                        oc={this.changeRoute}
                        bText="View Poll"
                        check="Home"
                    />
                    )
                }
            </div>
        );
    }
}
const mapStateToProps = ({ que, auth }) => {
    const CuserId = auth.currentUser.id;
    return {
        answeredQuestions: que.AllQuestions.filter(q =>
            (q.optionOne.votes.indexOf(CuserId) !== -1 ||
                q.optionTwo.votes.indexOf(CuserId) !== -1)
        ),
        unAnsweredQuestions: que.AllQuestions.filter(q =>
            (q.optionOne.votes.indexOf(CuserId) === -1 &&
                q.optionTwo.votes.indexOf(CuserId) === -1)
        ),
        allUsers: auth.AllUsers,

    }
}
export default connect(mapStateToProps)(Home);
