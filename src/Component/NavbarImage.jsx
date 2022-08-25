import React from 'react'
import { useSelector } from 'react-redux'
import './Style.css'

const NavbarImage = () => {
  const {navbarReducer} = useSelector((state) => state)
  return (
    <div>
      <img className='img-navbar' src={navbarReducer.data.logo} alt="" />
    </div>
  )
}

export default NavbarImage