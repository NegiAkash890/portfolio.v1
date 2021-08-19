import React from 'react'

function ProgressView({label,value,title,status}) {
    return (
        <div className='progress__container' title={title}>
            <label> > {label}</label>
            <div className='progress' style={{"--width":`${value}`}} data-label={status}></div>
        </div>
    )
}

export default ProgressView
