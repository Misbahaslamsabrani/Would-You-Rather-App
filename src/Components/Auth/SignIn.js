import React, { Component } from 'react';
import DropDown from '../ReUsableComponents/DropDown';
import Logo from "../../images/logo.png"
import { SignInUser } from '../../Store/Actions/AuthActions';
import { connect } from 'react-redux';

class SignIn extends Component {
    state = {
        selectedIndex: 4,
    }
    selectedHandle = (event, index) => {
        this.setState({ selectedIndex: index })
    }
    whenSignIn = () => {
        if (this.state.selectedIndex === 4) {
            return;
        }
        this.props.signingIn(this.props.allUsers[this.state.selectedIndex]);
    }
    whenNotSelected = () => {
        return this.state.selectedIndex === 4;
    }
    render() {
        const { selectedIndex } = this.state;
        const { allUsers } = this.props;
        return (
            <div className="conatiner">
                <br />
                <div className="row">
                    <div className="col l8 m12 s12 offset-l2">
                        <div className="card ">
                            <div className="card-conten purple lighten-4">
                                <div className="card-title center white-text purple lighten-1">
                                    <h4>Welcome to the Would You Rather App</h4>
                                </div>
                                <div className="center"><h5>Please sign in to continue</h5></div>
                                <div className="card-image">
                                    <img src={Logo} alt="logo" className="Logo" />
                                </div>
                                <div className="purple-text center flow-text">

                                    <b>Sign in</b></div>
                                <div className="center">
                                    <DropDown
                                        SI={selectedIndex}
                                        shandle={this.selectedHandle}
                                        allUsers={allUsers}
                                    />
                                    <div>
                                        <button
                                            className="btn-large purple darken-1"
                                            disabled={this.whenNotSelected()}
                                            onClick={this.whenSignIn}
                                        >
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        allUsers: state.auth.AllUsers,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        signingIn: (user) => dispatch(SignInUser(user))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);