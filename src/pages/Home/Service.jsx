import React from 'react';
import { Typography } from '@mui/material';

const Service = () => {
  return (
    <div className='service-section-container'>
      <Typography className='title-section' variant='h5' component='div'>Services</Typography>
      <div className='services-content'>
        <Typography className='service-text' variant='subtitle1' align="justify" sx={{ textIndent: '25px'}}>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
            The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
            Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. 
            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        </Typography>
      </div>
    </div>
  );
};

export default Service;
