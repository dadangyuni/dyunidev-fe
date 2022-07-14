import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HeaderDev, FooterDev, 
MainContent } from './components';
import './styles/index.scss';

const App = (props) => {
  return ( 
    <BrowserRouter>
      <div className='dyunidev-main'>
        <HeaderDev/>
        <MainContent {...props}/>
        <FooterDev/>
      </div> 
    </BrowserRouter>
  ) ;

  
};

export default App;
