import React from 'react';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit * 2,
    },
    padding: {
        padding: `0 ${theme.spacing.unit * 2}px`,
    },
});
const BadgeCom = (props) => {
    const { classes, value, badgeText } = props;
    return (
        <Badge color="primary" badgeContent={badgeText} className={classes.margin}>
            <Typography className={classes.padding}>{value}</Typography>
        </Badge>
    );
}

export default withStyles(styles)(BadgeCom);