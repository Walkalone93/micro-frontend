import React, { lazy, Suspense, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import Header from './components/Header';
import Progress from './components/Progress';

const HomeAppLazy = lazy(() => import('./components/HomeApp'));
const AuthAppLazy = lazy(() => import('./components/AuthApp'));
const DashboardAppLazy = lazy(() => import('./components/DashboardApp'));

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
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth">
                            <AuthAppLazy onAuthenticate={onAuthenticate} />
                        </Route>
                        <Route path="/dashboard">
                            <DashboardAppLazy />
                        </Route>
                        <Route path="/">
                            <HomeAppLazy />
                        </Route>
                    </Switch>                    
                </Suspense>
            </Grid>         
        </Grid>
    )
};