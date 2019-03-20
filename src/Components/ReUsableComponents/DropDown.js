import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AvatarComponent from './Avatar';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: "#f9fbe7",
    boxShadow: "3px 3px 20px 5px grey",
    margin: "20px auto",
  },
});
class DropDown extends Component {
  state = {
    anchorEl: null,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = () => {
    this.setState({ anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const { SI, shandle, classes, allUsers } = this.props;
    return (
      <div className={classes.root}>
        <List>
          <ListItem
            button
            aria-haspopup="true"
            aria-controls="lock-menu"
            aria-label="Select User"
            onClick={this.handleClickListItem}
          >
            <ListItemText
              primary="Select User"
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
              onClick={event => {
                shandle(event, index)
                this.handleMenuItemClick()
              }}
            >
              <AvatarComponent av={option.avatarURL} cn="avatar" />
              {option.name}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default withStyles(styles)(DropDown);