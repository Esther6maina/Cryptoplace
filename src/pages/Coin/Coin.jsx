import React from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const {coinID} = useParams();
  
  return (
    <div>
      <h2>Coin : {coinID} </h2>
    </div>
  )
}

export default Coin