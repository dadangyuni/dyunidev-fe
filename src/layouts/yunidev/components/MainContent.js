
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { LoadingPage } from 'components';
import routes from 'routes';
import { Container } from '@mui/material';

const MainContent = (props) => {
    return (
        <div className='page-content'>
            <Container maxWidth="lg" sx={{pt:'100px'}}>
                <React.Suspense fallback={<LoadingPage />}>
                    <Routes>
                        {routes.map((m,idx) => {
                            return (
                                <Route key= {idx}
                                    path= {m.path}
                                    element= {<m.component {...props}/>}
                                />
                            )
                        })}
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </React.Suspense>
            </Container>
        </div>
    );
};

export default MainContent;
