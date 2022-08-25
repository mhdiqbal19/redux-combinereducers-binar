import React from 'react'
import { useSelector } from 'react-redux'

const NavbarName = () => {

  const {navbarReducer} = useSelector((state) => state)

  console.log("ini data navbar", navbarReducer);

  return (
    <div>
      <h3>{navbarReducer.data.company_name}</h3>
    </div>
  )
}

export default NavbarName