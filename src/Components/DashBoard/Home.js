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
    render() {
        const { value } = this.state;
        const {Cuser} = this.props;
        return (
            <div className="container">
                <TabBar wc={this.handleChange} value={value} />
                <Question />
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        Cuser: state.auth.currentUser,
        allQuestions: state.que.AllQuestions,
    }
}
export default connect(mapStateToProps)(Home);
