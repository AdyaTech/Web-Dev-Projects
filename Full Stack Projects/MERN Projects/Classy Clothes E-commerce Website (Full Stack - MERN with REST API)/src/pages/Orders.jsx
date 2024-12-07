import React, { useEffect } from 'react'

import { BsBagCheckFill } from 'react-icons/bs';


import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for routing
import { runConfetti } from '../assets/utils';


const Orders = () => {
  

  useEffect(() => {
    localStorage.clear();
    // setCartItems([]);
    // setTotalPrice(0);
    // setTotalQty(0);
    runConfetti();
    
  },[]);

  return (
  
    <div className="success">
      <p className="icon">
        <BsBagCheckFill size={80} />
      </p>
      <h1>Thank you for your order!</h1>
      <p>Check your email inbox for the receipt.</p>
      <p className="description">
        If you have any questions, please email:{' '}
        <a href="#">info@classyclothes.com</a>
      </p>
      <Link to="/">
        <button className="btn" type="button" style={{ width: '300px' }}>
          Continue Shopping
        </button>
      </Link>
    </div>

    
  )
}

export default Orders
