import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import {LoadingPage} from 'components'
import ErrorBoundary from 'utils/ErrorBoundary';


const DyuniDev = React.lazy(()=> import('./yunidev'));
const LovelyPorto = React.lazy(()=> import('./lovelyporto'));

const App = (props) => {
    const layout = 'dyunidev';
    return (
        <React.Fragment>
            <ErrorBoundary>
                <CssBaseline/>
                <React.Suspense fallback={<LoadingPage/>}>
                    {layout === 'dyunidev' && <DyuniDev {...props}/>}
                    {layout === 'lovelyporto' && <LovelyPorto {...props}/>}
                </React.Suspense>
            </ErrorBoundary>
        </React.Fragment>
    );
};

export default App;
