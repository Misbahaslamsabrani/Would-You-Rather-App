import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import { connect } from "react-redux"
import Loader from '../Loader/Loader';
import { SignOutUser } from '../../Store/Actions/AuthActions';

class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      left: false,
    }
  }
  toggleDrawer = (open) => () => {
    this.setState({
      left: open,
    });
  };
  render() {
    const { UserFlag, cUser, logout } = this.props;

    const sideList = (
      <div className="list_width">
        <ul className="collection with-header noborder">
          <li className="collection-header noborder">
            <h6 className="white-text center">
              {UserFlag && (<div className="chip">
                <img src={cUser.avatarURL} alt="Contact Person" />
                {cUser.name}
              </div>)}
            </h6>
          </li>
          <li className="collection-item noborder">
            <NavLink to="/" className="grey-text darken-4">
              <span className="btn-small btn-floating purple lighten-1">
                <i className="material-icons">home</i>
              </span>
              &nbsp;
              Home
            </NavLink>
          </li>
          <li className="collection-item noborder">
            <NavLink to="/newQuestion" className="grey-text darken-4">
              <span className="btn-small btn-floating purple lighten-1">
                <i className="material-icons">insert_comment</i>
              </span>
              &nbsp;
              New Question
            </NavLink>
          </li>
          <li className="collection-item">
            <NavLink to="/leaderBoard" className="grey-text darken-4">
              <span className="btn-small btn-floating purple lighten-1">
                <i className="material-icons">show_chart</i>
              </span>
              &nbsp;
              Leader Board
            </NavLink>
          </li>
          <li className="collection-item noborder">
            <span className="grey-text darken-4 form_a" onClick={() => logout()}>
              <span className="btn-small btn-floating purple lighten-1">
                <i className="material-icons">exit_to_app</i>
              </span>
              &nbsp;
              Sign Out
            </span>
          </li>
        </ul>
      </div>
    );
    return (
      <div>
        {UserFlag ? (<Fragment><nav className="nav-wrapper purple darken-1">
          <div className="container">
            <span onClick={this.toggleDrawer(true)} className="btn-small btn-floating transparent">
              <i className="material-icons">menu</i>
            </span>
            &nbsp;
            &nbsp;
            &nbsp;
            <span className="flow-text purple darken-1 hide-on-large-only">Would You Rather App</span>
            <Drawer open={this.state.left} onClose={this.toggleDrawer(false)}>
              <div onClick={this.toggleDrawer(false)}>
                {sideList}
              </div>
            </Drawer>
            <span className="brand-logo hide-on-med-and-down">Would You Rather App</span>
          </div>
        </nav>
        </Fragment>) : (<Loader />)}
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cUser: state.auth.currentUser,
    UserFlag: state.auth.currentUserFlag,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(SignOutUser()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);