import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'home/HomeApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    // Run once, when this component is displayed
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // Is called when navigation happens in the Home app
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />
}