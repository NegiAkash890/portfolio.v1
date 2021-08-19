import React from 'react'
import Footer from './Footer'
import './rightScreen.css'
import First from './rightScreens/First'
import Fourth from './rightScreens/Fourth'
import Second from './rightScreens/Second'
import Third from './rightScreens/Third'
function SubScreen() {
    return (
        <div>
            <div className='first__screen full'>
               <First/>
            </div>
            <div className='second__screen full'>
                <Second/>
            </div>
            <div className='third__screen full'>
               <Third/>
            </div>
            <div className='fourth__screen full'>
               <Fourth/>
            </div>
            <Footer/>
        </div>
    )
}

export default SubScreen
