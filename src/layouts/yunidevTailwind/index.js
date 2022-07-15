import React, { Suspense } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Footer, Header } from './components';
import routes from 'routes';
import './styles/index.style.scss';
import { LoadingPage } from 'components';

const App = (props) => {
  return (
    <div className='page-container'>
        <Header/>
        <div className='main-content'>
          <BrowserRouter>
            <Routes>
              {routes.map((m,idx)=>{
                return (
                  <Route key={idx} path={m.path} element={
                    <Suspense fallback={<LoadingPage/>}>
                      <m.component {...props}/>
                    </Suspense>} 
                  />
                )
              })}
              <Route path='*'>Not Found</Route>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer/>
        <a id='to-top'
          href='#home' 
          className='h-14 w-14 bg-primary fixed z-[9999] rounded-full bottom-4 p-4 right-4 hidden flex-col justify-center items-center hover:animate-pulse'
        >
          <i className="fas fa-arrow-up text-white"></i>
        </a>
    </div>
  )
}

export default App