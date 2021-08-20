import React,{useState} from 'react';
import './leftScreen.css';
import styled, {keyframes} from 'styled-components';
import { fadeIn,flipInX } from 'react-animations'

const fadeAnimation = keyframes`${fadeIn}`;
const flipAnimation = keyframes`${flipInX}`;

const FadyDiv = styled.div`
  animation: 4s ${fadeAnimation};
  `;
const FlipButton = styled.div`
  animation: 4s ${flipAnimation};
  `;

function LeftScreen() {
    const [value,setValue] = useState(false);
    const handleClick = () =>{
       setValue(true);
       setTimeout(() => {
           setValue(false);
       }, 10000);
    }
    return (
        <div className='left__screen'>
            <FadyDiv>
            <div className='intro__headings'>
                    <h2>STUDENT . </h2>
                    <h2>ENGINEER .</h2>
                    <h2><u>DEV</u>ELOPER</h2>
                    <p>Currently working on my 
                        <span className='fancy__text'> @skills </span>
                        and looking for opportunities to 
                        <span className='fancy__text'> @learn</span>.
                    </p>
               
                <div className='connect__me'>
                    <ul>
                        <li><a href='https://www.linkedin.com/in/akash-negi-8900/' title='LinkedIn Profile'><img src={process.env.PUBLIC_URL + `/assets/linkedin_icon.svg`}  id='linkedin' alt='LinkedIn'/></a></li>
                        <li><a href='https://github.com/NegiAkash890' title='GitHub Profile'><img src={process.env.PUBLIC_URL + `/assets/github_icon.svg`}  id='GitHub' alt='GitHub'/></a></li>
                        <li><a href='https://akash8900.medium.com/' title='Medium'><img src={process.env.PUBLIC_URL + `/assets/medium.png`}  id='Blog' alt='Blog'/></a></li>
                        <li><a href='mailto:akash8900@gmail.com' title='Write Mail'><img src={process.env.PUBLIC_URL + `/assets/google_icon.svg`}  id='Gmail' alt='Gmail'/></a></li>
                    </ul>
                </div>
                { value ?
                    (<FlipButton>
                        <button className='btn' onMouseEnter={handleClick}><a style={{color:'white',textDecoration:'none'}} href='https://drive.google.com/file/d/1zkTjosm_aB151Wk6PB1tzn2EJvaMzj-O/view?usp=sharing'>Download Resume</a></button>
                    </FlipButton>):(<button className='btn' onMouseEnter={handleClick}><a style={{color:'white',textDecoration:'none'}} href='https://drive.google.com/file/d/1zkTjosm_aB151Wk6PB1tzn2EJvaMzj-O/view?usp=sharing'>Download Resume</a></button>)
                }
                
            </div>
            </FadyDiv>     
        </div>
    )
}

export default LeftScreen
