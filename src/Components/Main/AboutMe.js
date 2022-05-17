import React from 'react'
import ProfilePic from './../../Sources/profilepic.jpg'

export default function AboutMe() {
  return (
    <div className='aboutme-container'>
    
    
    <div className='header'>
    <div className='line'></div>  
    <div className='header-text'>About Me</div>
    <div className='line'></div>
    </div>
    

    <img src={ProfilePic} height="200px"
    width="300px"></img>
    
    
    </div>

    
    
  )
}
