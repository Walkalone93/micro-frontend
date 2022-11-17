import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({ onAuthenticate }) => {
    const ref = useRef(null);
    const history = useHistory();

    // Run once, when this component is displayed
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // Is called when navigation happens in the Auth app
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            // Is called when user is successfully authenticated
            onAuthenticate,
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
};