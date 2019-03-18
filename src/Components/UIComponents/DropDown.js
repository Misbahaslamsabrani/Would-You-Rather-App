import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "purple lighten-1",
    boxShadow: "3px 3px 20px 5px grey",
    margin: "20px auto",
  },
});
class DropDown extends Component{
  state = {
    anchorEl: null,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = () => {
    this.setState({anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const {SI, shandle, classes, allUsers}= this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="When device is locked"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Please Choose An Account in order to SignIn"
              secondary={allUsers[SI] && allUsers[SI].name}
            />
          </ListItem>
        </List>
        <Menu
          id="lock-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {allUsers.map((option, index) => (
            <MenuItem
              key={option.id}
              selected={index === SI}
              onClick={event => {shandle(event, index) 
                this.handleMenuItemClick()}}
            >
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(DropDown);