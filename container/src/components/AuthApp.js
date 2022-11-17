import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({ onSignIn }) => {
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
            onSignIn,
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
};