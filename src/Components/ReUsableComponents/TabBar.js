import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = {
  root: {
    flexGrow: 1,
  },
};

const TabBar = (props) => {
  const { classes, value, wc } = props;
  return (
    <div className="row">
      <div className="col s12 m12 l8 offset-l2 purple-text">
        <br />
        <Paper className={classes.root}>
          <Tabs
            value={value}
            onChange={wc}
            indicatorColor="primary"
            textColor='inherit'
            centered
          >
            <Tab label="UnAnswered Questions" className="white" />
            <Tab label="Answered Questions" className="white" />
          </Tabs>
        </Paper>
      </div>
    </div>
  );
}
export default withStyles(styles)(TabBar);