import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      <div className="hero">
        <h1>Largest<br/>Crypto Marketplace</h1>
        <p>Welcome to the world's largest Cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form>
          <input type="text" placeholder='Search crypto..'/>
          <button type="submit"> Search</button>
        </form>
      </div>
      <div className="crtpto-table"></div>
      <div className="table-layout"></div>
      <p>#</p>
      <p>Coins</p>
      <p>Price</p>
      <p>24H Change</p>
      <p>Market Cap</p>
      
    </div>
  )
}

export default Home