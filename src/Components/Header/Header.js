import React from 'react'
import logo from './../../Sources/dllogo2.png'
import hamburger from './../../Sources/hamburger.png'

export default function Header() {
  return (
    <div className='header-container'>
        <img className='header-logo' src={logo}/>
        <img className='header-hamburger' src={hamburger}/>
    </div>
  )
}
