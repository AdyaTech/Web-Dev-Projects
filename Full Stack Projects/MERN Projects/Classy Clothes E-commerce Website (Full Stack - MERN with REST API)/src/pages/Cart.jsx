import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';
import { toast } from 'react-toastify'; // Import toast for notifications

const Cart = () => {
  const { products, currency, cartItems, updateQuantity, navigate } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = [];
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item],
          });
        }
      }
    }
    setCartData(tempData);
  }, [cartItems]);

  const handleProceedToBuy = () => {
    // Check if the cart is empty
    if (cartData.length === 0) {
      // Show an alert or notification if the cart is empty
      toast.info('Please select a product before proceeding to buy!');
    } else {
      // Navigate to the place-order page if there are items in the cart
      navigate('/place-order');
    }
  };

  return (
    <div className="lol pt-14">
      <div className="cart-subtitle">
        <span>YOUR CART</span>
      </div>

      <div className="cartbox">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);
          return (
            <div key={index} className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className="w-16 sm:w-20" src={productData.image[0]} alt="" />
                <div>
                  <p className="text-xs sm:text-lg font-medium">{productData.name}</p>
                  <div className="flex items-center gap-5 mt-2">
                    <p>{currency}{productData.price}</p>
                    <p className="px-2 sm:px-3 sm:py-1 border bg-slate-50">{item.size}</p>
                  </div>
                </div>
              </div>
              <input
                onChange={(e) => e.target.value === '' || e.target.value === '0' ? null : updateQuantity(item._id, item.size, Number(e.target.value))}
                className="border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1"
                type="number"
                min={1}
                defaultValue={item.quantity}
              />
              <img onClick={() => updateQuantity(item._id, item.size, 0)} className="w-4 mr-4 sm:w-5 cursor-pointer" src={assets.bin_icon} alt="" />
            </div>
          );
        })}
      </div>
      <div className="cart-total-box flex justify-end my-20">
        <div className="w-full sm:w-[450px]">
          <CartTotal />
        </div>
        <div className="buy-box">
          <button onClick={handleProceedToBuy} className="buy-box bg-black text-white text-sm my-8 px-8 py-3">
            PROCEED TO BUY
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
