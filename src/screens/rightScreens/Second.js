import React from 'react'
import ProgressView from './ProgressView'


function Second() {
    return (
        <>
              <h3>002</h3>
              <h2>Skill Set</h2>
              <div className='skill__container'>
                    <div className='front__end'>
                            <h3>Front End Skills</h3>
                            <ProgressView title='85' label='HTML' value='85' status='Intermediate'/>
                            <ProgressView title='85' label='CSS' value='85' status='Intermediate'/>
                            <ProgressView title='80' label='JavaScript' value='80' status='Intermediate'/>
                            <ProgressView title='80' label='React' value='80' status='Intermediate'/>
                    </div>
                    <div className='back__end'>
                    <h3>Backend End Skills</h3>
                            <ProgressView title='65' label='NodeJS' value='65' status='Beginner'/>
                            <ProgressView ltitle='65' label='MongoDB' value='65' status='Beginner'/>
                    </div>
              </div>
         </>
    )
}

export default Second
