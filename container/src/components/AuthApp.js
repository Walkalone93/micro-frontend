import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    // Run once, when this component is displayed
    useEffect(() => {
        const { onParentNavigation } = mount(ref.current, {
            // Is called when navigation happens in the Auth app
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            initialPath: history.location.pathname
        });

        history.listen(onParentNavigation);
    }, []);

    return <div ref={ref} />
};