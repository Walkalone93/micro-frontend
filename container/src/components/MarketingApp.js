import React, { useRef, useEffect } from 'react';
import { mount } from 'marketing/MarketingApp';

export default () => {
    const ref = useRef(null);

    // run once, when this component is displayed
    useEffect(() => {
        mount(ref.current);
    }, []);

    return <div ref={ref} />
}