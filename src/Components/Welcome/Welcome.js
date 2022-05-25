import React from 'react'
import logo from './../../Sources/dllogo2.png';
import { Link } from 'react-router-dom';

export default function Welcome() {
  return (
    <div className="welcome">
      
      <header className="welcomepage">
      <Link to='/main'><img src={logo} className="welcome-logo" alt="logo" /></Link>
      </header>
      
    </div>
  )
}
