import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import App from './App';

const generateClassName = createGenerateClassName({
    // Use this prefix for generated class names, instead of the default one (jss)
    // Otherwise, 2 packages will have class name collision
    productionPrefix: 'container'
});

export default () => (
    <StylesProvider generateClassName={generateClassName}>
        {/* Browser History, changes URL */}
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StylesProvider>
);