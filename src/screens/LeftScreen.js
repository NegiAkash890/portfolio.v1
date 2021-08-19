import React from 'react'
import './leftScreen.css'

function LeftScreen() {
    return (
        <div className='left__screen'>
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
                <button className='btn'>Download Resume</button>
            </div>
        </div>
    )
}

export default LeftScreen
