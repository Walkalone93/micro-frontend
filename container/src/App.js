import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

import HomeApp from './components/HomeApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

export default () => {
    const history = useHistory();
    const [ user, setUser ] = useState();

    function onSignOut() {
        setUser(null);
    }

    function onAuthenticate(user) {
        setUser(user);
        history.push('/');
    }

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
                <Header user={user} onSignOut={onSignOut} />
            </Grid>

            <Grid item xs={12}>
                <Divider />
            </Grid>

            <Grid item xs={12}>
                <Switch>
                    <Route path="/auth">
                        <AuthApp onAuthenticate={onAuthenticate} />
                    </Route>
                    <Route path="/">
                        <HomeApp />
                    </Route>
                </Switch>   
            </Grid>         
        </Grid>
    )
};