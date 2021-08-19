import React from 'react'

function Third() {
    return (
        <>
             <h3>003</h3>
             <h2>Things I like doing</h2>
             <div className='skill__interests'>
                   <div className='interest__section'>
                        <img src={process.env.PUBLIC_URL + '/assets/CSS battle.png'} width='100px'  alt='CSS Battle'/>
                        <p>This has helped me a lot to improve my CSS. </p>
                   </div>
                   <div className='interest__section'>
                        <img src={process.env.PUBLIC_URL + '/assets/blog.png'} width='100px' alt='Blogs'/>
                        <p>I also love to write technical post this helps me to strenghten and deepen my knowledge. </p>
                    </div>
                    <div className='interest__section'>
                        <img src={process.env.PUBLIC_URL + '/assets/github.png'} width='100px' alt='Blogs'/>
                        <p>I also contribute to open source. This has helped me apply skills for development of the community resources. </p>
                    </div>
                     <div className='interest__section'>
                        <img src={process.env.PUBLIC_URL + '/assets/anime.png'} width='100px' alt='Blogs'/>
                        <p>When I have time to spare I like to watch anime</p>
                    </div>
             </div>
        </>
    )
}

export default Third;