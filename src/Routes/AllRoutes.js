import React from 'react';
import { Route, Routes } from "react-router-dom";
import Checkout from '../Components/Checkout/Checkout';
import Login from '../Components/Login/Login';
import Payment from '../Components/Payment/Payment';
import Header from '../Header';
import Home from '../Home';


function AllRoutes() {
  return (
    <div>
      <Header/>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default AllRoutes