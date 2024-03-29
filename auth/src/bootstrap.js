import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

const mount = (el, { onNavigate, defaultHistory, initialPath, onAuthenticate }) => {
    const history = defaultHistory ?? createMemoryHistory({ initialEntries: [ initialPath ] });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(<App history={history} onAuthenticate={onAuthenticate} />, el);

    return {
        // Is called when navigation happens in the Container app
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    const root = document.getElementById('auth-dev-root');
    if (root) {
        mount(root, { defaultHistory: createBrowserHistory() });
    }
}

export { mount };