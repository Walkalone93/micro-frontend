import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        display: 'flex',
        justifyContent: 'center'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <CircularProgress />
        </div>
    );
}