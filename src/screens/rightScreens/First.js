import React from 'react'
import styled, {keyframes} from 'styled-components';
import { fadeIn } from 'react-animations'

const fadeAnimation = keyframes`${fadeIn}`;

export const FadyText = styled.span`
  animation: 3s ${fadeAnimation};
  `;
function First() {
    return (
        <>    
                <h3>001</h3>
                <h2>About Me</h2>
                <div className='personal__info'>
                    <div className='self__intro'>
                       <p>I am <FadyText> <mark>Akash Negi</mark></FadyText></p>  
                       <p><FadyText><mark>ECE</mark></FadyText> Undergraduate</p>
                       <p>Currently I am learning to contribute to <FadyText><mark>Open Source</mark></FadyText></p>
                       <p>Everyday, I try to contribute to open-source community, sometimes it's a <FadyText><mark>successfull</mark></FadyText> PR and often I end up  <FadyText><mark>learning</mark></FadyText> new features of GitHub</p>
                    </div>
                </div>
        </>
    )
}

export default First
