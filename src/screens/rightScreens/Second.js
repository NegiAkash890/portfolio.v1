import { Masonry } from '@mui/lab';
import { Box, Paper, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

const heights = ['30vh', '30vh', '30vh','30vh','30vh', '30vh'];
const skills = ['HTML', 'CSS', 'Javascript','React', 'Sass', 'Redux']

const Item = styled(Paper)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor:"black"
}));
function Second() {
    return (
        <Box
        sx={{
        padding:'1rem',
        height: '100vh',
        backgroundBlendMode: 'multiply',
        background: `url(${process.env.PUBLIC_URL}/assets/landing-page-3.jpg) center rgba(255,204,0)`,
        backgroundSize: 'cover',
        }}>
              <h3>002</h3>
              <h2>Skill Set</h2>
              <div className='skill__container'>
                    <div className='front__end'>
                        <h3>Front End Skills</h3>
                    </div>
                    <Box sx={{display:"flex", flexWrap:"wrap", flexBasis:"300px",fontFamily: 'Roboto'}}>
                      <Masonry columns={3} spacing={1}>
                        {heights.map((height, index) => (
                         <Item key={index} sx={{ height , opacity:0.6}}>
                            <Typography sx ={{color:"white", fontWeight:"bolder", fontSize:"2rem"}}>{skills[index]}</Typography>
                          </Item>
                        ))}
                      </Masonry>
                   </Box>
              </div>
         </Box>
    )
}

export default Second
