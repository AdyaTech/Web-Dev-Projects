import React, { useEffect } from 'react';
import { BsBagCheckFill } from 'react-icons/bs';
// import { useStateContext } from '../context/StateContext';
// import { runConfetti } from '../assets/utils';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for routing

const SuccessPay = () => {
    // Uncomment and use these if required:
    // const { setCartItems, setTotalPrice, setTotalQty } = useStateContext();

    // useEffect(() => {
    //     // Uncomment below lines if you intend to clear cart data on success:
    //     localStorage.clear();
    //     setCartItems([]);
    //     setTotalPrice(0);
    //     setTotalQty(0);
    //     runConfetti();
    // }, []);

    return (
        <div className="success">
            <p className="icon">
                <BsBagCheckFill size={80} />
            </p>
            <h1>Thank you for your order!</h1>
            <p>Check your email inbox for the receipt.</p>
            <p className="description">
                If you have any questions, please email{' '}
                <a href="mailto:dinemarket@example.com">dinemarket@example.com</a>
            </p>
            <Link to="/">
                <button className="btn" type="button" style={{ width: '300px' }}>
                    Continue Shopping
                </button>
            </Link>
        </div>
    );
};

export default SuccessPay;
