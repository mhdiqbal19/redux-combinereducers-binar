import React from 'react'
import { useSelector } from 'react-redux'


const CardImage = () => {
  const {cardReducer} = useSelector((state) => state)

  return (
    <div>
        <img src={cardReducer.data.img} alt="" />
    </div>
  )
}

export default CardImage