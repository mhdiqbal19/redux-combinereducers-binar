import React from 'react'
import { useSelector } from 'react-redux'

const CardName = () => {
  const {cardReducer} = useSelector((state) => state)


  return (
    <div>
        <h1>{cardReducer.data.name}</h1>
    </div>
  )
}

export default CardName