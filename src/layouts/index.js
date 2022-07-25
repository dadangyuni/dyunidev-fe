import React from 'react';
import ErrorBoundary from 'utils/ErrorBoundary';
import DyuniDev from './yunidev';
import YuniDevTailwind from './yunidevTailwind';

const App = (props) => {
    const layout = 'yunidevtailwind';
    return (
        <ErrorBoundary>
            {layout === 'dyunidev' && <DyuniDev {...props}/>}
            {layout === 'yunidevtailwind' && <YuniDevTailwind {...props}/>}
        </ErrorBoundary>
    );
};

export default App;
