import React from 'react'
import ProfilePic from './../../Sources/profilepic.jpg'

export default function AboutMe() {
  return (
    <div className='aboutme-container'>
    
    
    <div className='header'>
    <div className='line'></div>  
    <div className='header-text'>Myself</div>
    <div className='line'></div>
    </div>
    
    <div className='aboutme-sec'>
    
    <div className='aboutme-sec-1'>
    <p>Thank you for visiting my site! I'm Dimitri and I'm 26 years old, living in currently in Germany. My passion is to create stuff on the computer
        and last year I started my journey to become a Full-Stack Developer. My intention for building this site, was to share my projects with the world. 
    </p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>

    <img className='profilepic' src={ProfilePic} ></img>
    
    </div>
    
    </div>
   
    
    
    </div>

    
    
  )
}
