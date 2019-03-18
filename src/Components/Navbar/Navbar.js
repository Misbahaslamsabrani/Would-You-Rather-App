import React, { Component, Fragment } from 'react'
import { NavLink } from "react-router-dom"
import Drawer from '@material-ui/core/Drawer';
import { connect } from "react-redux"
import Loader from '../Loader/Loader';
import JPic from "../../images/j.jpg"

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
  componentDidMount() {

  }
  render() {
    const sideList = (
      <div className="list_width">
        <ul className="collection with-header">
          <li className="collection-header noborder">
            <h6 className="white-text center">
              {this.props.User && (<div class="chip">
                <img src={JPic} alt="Contact Person" />
                  Jane Doe
                  </div>)}
            </h6>
          </li>
          <li className="collection-item">
                <NavLink to="/" className="grey-text darken-4">
                  <span className="btn-small btn-floating purple lighten-1">
                    <i className="material-icons">home</i>
                  </span>
                  &nbsp;
                  Home
            </NavLink>
              </li>
              <li className="collection-item">
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
              <li className="collection-item">
                <NavLink to="/logout" className="grey-text darken-4">
                  <span className="btn-small btn-floating purple lighten-1">
                    <i className="material-icons">exit_to_app</i>
                  </span>
                  &nbsp;
                  Sign Out
            </NavLink>
              </li>
        </ul>
      </div>
          );
          return (
      <div>
            {this.props.User ? (<Fragment><nav className="nav-wrapper purple darken-1">
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

          }
          }
const mapDispatchToProps = (dispatch) => {
  return {
            User: true,
         }
       }
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);