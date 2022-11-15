import React from 'react';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    title: {
        color: 'grey',
        display: 'flex',
        justifyContent: 'space-between'
    },
    homeButton: {
        cursor: 'pointer'
    }
});

export default () => {
    const classes = useStyles();
    const history = useHistory();

    function goToHome() {
        history.push('/');
    }

    function goToLogin() {
        history.push('/auth/signin');
    }

    return (
        <h1 className={classes.title}>
            <a className={classes.homeButton} type="button" onClick={goToHome}>Home</a>
            <button onClick={goToLogin}>Login</button>
        </h1>
    );
}