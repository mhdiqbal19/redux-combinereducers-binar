import React from 'react'
import NavbarImage from './NavbarImage'
import NavbarName from './NavbarName'
import './Style.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavbarImage/>
      <NavbarName/>
    </div>
  )
}

export default Navbar
