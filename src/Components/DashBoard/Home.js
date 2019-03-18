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
        const {user} = this.props;
        return (
            <div className="container">
                <TabBar wc={this.handleChange} value={value} />
                <Question User={user}/>
            </div>
        );
    }
}
const mapStateToProps = (state) =>{
    return {
        user: state.auth.currentUser,
    }
}
export default connect(mapStateToProps)(Home);
