import React from 'react';
import Box from '@mui/material/Box';
import TypeAnimation from 'react-type-animation';
import Typography from '@mui/material/Typography';

function First() {
  return (
    <Box
      sx={{
        height: '100vh',
        padding: '2rem',
        backgroundBlendMode: 'overlay',
        background: `url(${process.env.PUBLIC_URL}/assets/landing-page-3.jpg) center rgba(0,255,0,0.2)`,
        backgroundSize: 'cover',
      }}
    >
      <h3>001</h3>
      <h2>About Me</h2>
      <Box sx={{height:"100%", width:"100%", display:"grid",placeItems:"center"}}>
        <Typography variant='h1' fontWeight="600">
        <TypeAnimation cursor="true" sequence = {['I am Akash Negi',5000, 'ECE Student',5000 , 'Web Developer',5000]} repeat={Infinity} />
        </Typography>
      </Box>
    </Box>
  );
}

export default First;
