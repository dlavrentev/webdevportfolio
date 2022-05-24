import React from 'react'
import Arrow from './../../Sources/Arrow.png'

export default function Skills() {
  return (
    <div className='skills-container'>
        <div className='header'>
    <div className='line'></div>  
    <div className='header-text'>Skills</div>
    <div className='line'></div>
    </div>
    
    <div className='skills-content'>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
    </p>

    <div className='skills-list'>
    <div className='skills-list-1'>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>HTML</h2>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>CSS</h2>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>Javascript</h2>
    </div>
    
    <div className='skills-list-2'>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>Bootstrap</h2>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>React</h2>
    </div>
    
    
    <div className='skills-list-3'>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>Node</h2>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>Express</h2>
    <img src={Arrow} height="16px"></img><h2 className='h2-pad'>SQL</h2>
    </div>
    
    
    </div>
    
    </div>
    
    </div>
  )
}
