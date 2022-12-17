import React, { useEffect, useRef } from 'react';
import { mount } from 'dashboard/DashboardApp';

export default () => {
    const ref = useRef(null);

    // Run once, when this component is displayed
    useEffect(() => {
        mount();
    }, []);

    return (
        <app-root></app-root>
    )
}