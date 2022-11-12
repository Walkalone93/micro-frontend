import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    // run once, when this component is displayed
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            // Is called when navigation happens in the Marketing app
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