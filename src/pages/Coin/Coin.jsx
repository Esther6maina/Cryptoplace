import React, { useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'

const Coin = () => {

  const {coinID} = useParams();
  const [coinData, setCoinData] = useState();

  const fetchCoinData = async ()=>{
    const options = {
      
    }
  }


 

  
  return (
    <div>
      <h2>Coin : {coinID} </h2>
    </div>
  )
}

export default Coin;