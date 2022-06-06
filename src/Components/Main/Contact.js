import React from 'react'
import Instagram from './../../Sources/instagramlogo.png'
import LinkedIn from './../../Sources/linkedinlogo.png'
import GitHub from './../../Sources/githublogo.png'
import CodePen from './../../Sources/codepenlogo.png'
import Twitter from './../../Sources/twitterlogo.png'

export default function Contact() {
  return (
    <div>
      <div className='header'>
        <div className='line'></div>  
        <div className='header-text'>Contact</div>
        <div className='line'></div>
      </div>
   
      <div className='andnow'>
        <h1>AND NOW?</h1>
        <p>Lorem ipsum dolor sit   amet consectetur adipisicing elit. Quae, reprehenderit! Neque
             consequatur velit. Lorem ipsum dolor sit   amet consectetur adipisicing elit. Quae, reprehenderit! Neque
             consequatur velit. Lorem ipsum dolor sit   amet consectetur adipisicing elit. Quae, reprehenderit! Neque
             consequatur velit.
        </p>
        <button class="button">
            CONTACT ME!
        </button>
      </div>
      
      <div className='contactlinks'>
          <img className='linkpadding' src={Instagram}/>
          <img className='linkpadding' src={LinkedIn}/>
          <img className='linkpadding' src={Twitter}/>
          <img className='linkpadding' src={GitHub}/>
          <img className='linkpadding' src={CodePen}/>
      </div>
      
      <p className='autograph'>Designed and Built by Dimitri Lavrentev</p>
      
      
      

      
    </div>
  )
}
