import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import MarketingApp from './components/MarketingApp';
import AuthApp from './components/AuthApp';
import Header from './components/Header';

const generateClassName = createGenerateClassName({
    // Use this prefix for generated class names, instead of the default one (jss)
    // Otherwise, 2 packages will have class name collision
    productionPrefix: 'container'
});

export default () => (
    <StylesProvider generateClassName={generateClassName}>
        {/* Browser History, changes URL */}
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path="/auth" component={AuthApp} />
                <Route path="/" component={MarketingApp} />
            </Switch>
        </BrowserRouter>
    </StylesProvider>
);