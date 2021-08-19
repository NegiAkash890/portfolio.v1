import React,{useState} from 'react';
import './leftScreen.css';
import styled, {keyframes} from 'styled-components';
import { fadeIn,flipInX } from 'react-animations'

const fadeAnimation = keyframes`${fadeIn}`;
const flipAnimation = keyframes`${flipInX}`;

const FadyDiv = styled.div`
  animation: 3s ${fadeAnimation};
  `;
const FlipButton = styled.div`
  animation: 3s ${flipAnimation};
  `;

function LeftScreen() {
    const [value,setValue] = useState(false);
    const handleClick = () =>{
       setValue(true);
       setTimeout(() => {
           setValue(false);
       }, 2000);
    }
    return (
        <div className='left__screen'>
            <FadyDiv>
            <div className='intro__headings'>
                    <h2>STUDENT . </h2>
                    <h2>ENGINEER .</h2>
                    <h2>DEVELOPER</h2>
                    <p>Currently working on my 
                        <span className='fancy__text'> @skills </span>
                        and looking for opportunities to 
                        <span className='fancy__text'> @learn</span>.
                    </p>
               
                <div className='connect__me'>
                    <ul>
                        <li><a href='#'><img src={process.env.PUBLIC_URL + `/assets/linkedin_icon.svg`}  id='linkedin' alt='LinkedIn'/></a></li>
                        <li><a href='#'><img src={process.env.PUBLIC_URL + `/assets/github_icon.svg`}  id='GitHub' alt='GitHub'/></a></li>
                        <li><a href='#'><img src={process.env.PUBLIC_URL + `/assets/blog_icon.svg`}  id='Blog' alt='Blog'/></a></li>
                        <li><a href='#'><img src={process.env.PUBLIC_URL + `/assets/google_icon.svg`}  id='Gmail' alt='Gmail'/></a></li>
                    </ul>
                </div>
                { value ?
                    (<FlipButton>
                        <button className='btn' onMouseEnter={handleClick}>Download Resume</button>
                    </FlipButton>):<button className='btn' onMouseEnter={handleClick}>Download Resume</button>
                }
                
            </div>
            </FadyDiv>     
        </div>
    )
}

export default LeftScreen
