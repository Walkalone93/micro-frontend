import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Landing from './components/Landing';

const generateClassName = createGenerateClassName({
    // Use this prefix for generated class names, instead of the default one (jss)
    // Otherwise, 2 packages will have class name collision
    productionPrefix: 'home'
});

export default ({ history }) => {
    return (
        <StylesProvider generateClassName={generateClassName}>
            {/* We have to provide our history object manually, instead of used a new copy, provided by the BrowserHistory */}
            <Router history={history}>
                <Switch>
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    );
}