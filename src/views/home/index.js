import React from 'react';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Portofolio from './Portofolio';
import './styles/index.scss';

const Home = () => {
  return (
    <div className='flex flex-col'>
      <Hero/>
      <About/>
      <Portofolio/>
      <Contact/>
    </div>
  )
}

export default Home