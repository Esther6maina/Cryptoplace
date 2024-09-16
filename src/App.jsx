import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import { Routes, Route } from 'react-router-dom'
import Coin from './pages/Coin/Coin'
import CoinContextProvider from './context/Coincontext'
import Footer from './components/Footer/Footer'

const App = () => {

  return (
    <CoinContextProvider>
     <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/coin/coinId' element={<Coin/>}/>
      </Routes>
      <Footer/> 
     </div>
    </CoinContextProvider>       
  );
};

export default App