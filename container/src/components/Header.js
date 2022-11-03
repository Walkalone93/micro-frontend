import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        color: 'grey'
    }
});

export default () => {
    const classes = useStyles();
    return (
        <h1 className={classes.title}>
            Header
        </h1>
    );
}