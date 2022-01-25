import React from 'react';
import About from './About';
import Service from './Service';
import { Box, Grid, Typography, Button } from '@mui/material';

import './styles/index.style.scss';


const Home = (props) => {

  return <div className='home-container'>
       <Box className='box-banner' sx={{ height: '400px' }}>
         <Grid container spacing={2}>
          <Grid className='banner-text' item xs={8}>
            <Typography className='intro-text' variant='h4' component='div'>
              Hi, I'm Dadang
            </Typography>
            <Typography className='intro-description' variant='subtitle1'>
              I'm a web developer based in Malang, Indonesia.
              I'm currently the front end developer at an IT company, Aksaramaya. 
              In my spare time I like working with a few clients and building my own products.
            </Typography>
          </Grid>
          <Grid className='banner-img' item xs={12} sm container>
            <img alt="complex" src="/images/Star.png"/>
          </Grid>
         </Grid>
       </Box>
       <About/>
       <Service/>
       <div className='contact-me-action'>
         <Typography className='title-section' variant='h5' component='div'>Interested in doing project with me ?</Typography>
         <Button className="button-contact" variant="contained">Email me</Button>
       </div>
  </div>;
};

export default Home;
