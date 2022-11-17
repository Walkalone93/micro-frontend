import React, { useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { createGenerateClassName } from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    // Use this prefix for generated class names, instead of the default one (jss)
    // Otherwise, 2 packages will have class name collision
    productionPrefix: 'container'
});

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
        <React.Fragment>
            <Header user={user} onSignOut={onSignOut} />
            <Switch>
                <Route path="/auth">
                    <AuthApp onAuthenticate={onAuthenticate} />
                </Route>
                <Route path="/">
                    <MarketingApp />
                </Route>
            </Switch>            
        </React.Fragment>
    )
};