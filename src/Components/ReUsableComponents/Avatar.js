import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

const AvatarComponent = (props) => {
    const { av, cn } = props;
    return (
        <Grid container justify="space-between" alignItems="center">
            <Avatar alt="Remy Sharp" src={av} className={cn} />
        </Grid>
    );
}

export default AvatarComponent;