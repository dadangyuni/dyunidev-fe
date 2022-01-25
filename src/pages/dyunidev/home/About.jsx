import { Typography } from '@mui/material';
import React from 'react';

const About = () => {
  return (
    <div className='about-section-container'>
        <Typography className='title-section' variant='h5' component='div'>About</Typography>
        <div className='image-wrapper'>
            <img className="image-about" alt='profile' src='/images/about_pict_1.jpg'/>
            <img className="image-about" alt='profile' src='/images/about_pict_2.jpg'/>
        </div>
        <div className='about-description'>
            <Typography className='description-text' variant='subtitle1' align="justify" sx={{ textIndent: '25px'}}>
                "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, 
                and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. 
                No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful.
                Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. 
                To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences,
                or one who avoids a pain that produces no resultant pleasure?"
             </Typography>
        </div>
    </div>
  );
};

export default About;
