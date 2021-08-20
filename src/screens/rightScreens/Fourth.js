import React from 'react'

function Fourth() {
  const handleClick  = (link)=>{
    window.location.href= link;
  }
    return (
        <>
             <h3>004</h3>
             <h2>Community Work</h2>
             <div className='community__section'>
                 <div className='csection'>
                        <img src={process.env.PUBLIC_URL + '/assets/LevelBeta.png'} alt='MLSA badge' width='200px'/>
                        <div className='csection__info'>
                           <h3>My First Event as MLSA</h3>
                           <p className='summary' >
                             During this event as an host of the
                             event I taught about Microsoft Azure
                             and basics of Cloud Computing.

                           </p>
                           <button title='Watch Recording' onClick={()=>handleClick('https://stdntpartners-my.sharepoint.com/:p:/g/personal/akash_negi_studentambassadors_com/ERBEH3hSTTdKjCfPTYhUpugBL7R5RG3xyhE0h3bZrdPf2A?e=fegZHO')}>&#8594;</button>
                           
                        </div>
                           
                 </div>
                 <div className='csection'>
                 <img src={process.env.PUBLIC_URL + '/assets/unilogo.webp'} alt='MLSA badge' width='200px'/>
                    <div className='csection__info'>
                            <h3>InHouse Training</h3>
                            <p className='summary'>
                              Volunteered as Mentor.
                              During these session as Mentor
                              my responsibility was to teach student
                              about HTML, CSS and JavaScript usage.
                            </p>
                            <button title='Class PPTs' onClick={()=>handleClick('https://github.com/NegiAkash890/Week-1')}>&#8594;</button>
                    </div>
                 </div>
             </div>
        </>
    )
}

export default Fourth
