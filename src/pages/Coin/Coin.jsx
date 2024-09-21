import React, { useContext, useEffect, useState } from 'react'
import './Coin.css'
import { useParams } from 'react-router-dom'
import { CoinContext } from '../../context/Coincontext';

const Coin = () => {

  const {coinID} = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const {currency} = useContext(CoinContext);


  const fetchCoinData = async ()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}`, options)
      .then(response => response.json())
      .then(response => setCoinData(response))
      .catch(err => console.error(err));
  }
  
  const fetchHistoricalData = async ()=>{
    const options = {method: 'GET', headers: {accept: 'application/json'}};

    fetch(`https://api.coingecko.com/api/v3/coins/${coinID}/market_chart?vs_currency=${currency.name}&days=10`, options)
      .then(response => response.json())
      .then(response => setHistoricalData(response))
      .catch(err => console.error(err));
  }

  useEffect(()=>{
    fetchCoinData();
  },[currency])

  if(coinData){
    return (
      <div className='coin'>
        <div className="coin-name">
          <img src={coinData.image.large} alt=''/>
          <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
        </div>
      </div>
    )
  }else{
    return (
      <div className='spinner'>
        <div className='spin'></div>
      </div>
    )
  }
 
}

export default Coin;