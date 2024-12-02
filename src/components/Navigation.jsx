import React from 'react'
import '../components/Common.css'

const Navigation = () => {
  return (
    <div className='Navbar'>
      <nav>
        <ul>
          <li><a href='/'>Home</a></li>
          <li><a href='#'>About Me</a></li>
          <li><a href='#'>My Skills</a></li>
          <li><a href='#'>My Projects</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
