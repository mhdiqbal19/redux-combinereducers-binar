import React from 'react'
import CardImage from './CardImage'
import CardName from './CardName'
import { useSelector } from 'react-redux'


const Card = () => {

  const {authReducer} = useSelector((state) => state)
  console.log("auth reducer", authReducer.auth.isLogin);

  return (
    <div>
      {!!authReducer.auth.isLogin === false ? <p>Anda belum login!</p> :
      (
        <div>
            <CardImage/>
            <CardName/>
        </div>
      )}

    </div>
  )
}

export default Card