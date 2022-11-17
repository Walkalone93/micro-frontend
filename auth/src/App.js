import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import SignIn from './components/Signin';
import SignUp from './components/Signup';

const generateClassName = createGenerateClassName({
    // Use this prefix for generated class names, instead of the default one (jss)
    // Otherwise, 2 packages will have class name collision
    productionPrefix: 'auth'
})

export default ({ history, onAuthenticate }) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            {/* We have to provide our history object manually, instead of used a new copy, provided by the BrowserHistory */}
            <Router history={history}>
                <Switch>
                    <Route path="/auth/signin">
                        <SignIn onSignIn={onAuthenticate} />
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp onSignUp={onAuthenticate} />
                    </Route>
                </Switch>
            </Router>
        </StylesProvider>
    );
}