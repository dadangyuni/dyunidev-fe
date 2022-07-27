import React from 'react';
import ErrorBoundary from 'utils/ErrorBoundary';
import YuniDevTailwind from './yunidevTailwind';

const App = (props) => {
    const layout = 'yunidevtailwind';
    return (
        <ErrorBoundary>
            {layout === 'yunidevtailwind' && <YuniDevTailwind {...props}/>}
        </ErrorBoundary>
    );
};

export default App;
