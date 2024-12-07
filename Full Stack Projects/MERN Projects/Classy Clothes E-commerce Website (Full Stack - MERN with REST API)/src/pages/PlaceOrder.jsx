import React, { useContext, useState } from 'react';
import CartTotal from '../components/CartTotal';
import { ShopContext } from '../context/ShopContext';
import { toast } from 'react-toastify';

const PlaceOrder = () => {
  const { navigate, resetCart } = useContext(ShopContext);

  // State to hold form input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    phone: '',
  });

  // Function to update form state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Function to validate form fields
  const validateForm = () => {
    const { firstName, lastName, email, street, city, state, pincode, country, phone } = formData;

    // Check for empty fields
    if (!firstName || !lastName || !email || !street || !city || !state || !pincode || !country || !phone) {
      toast.error('Please fill in all the fields!');
      return false;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      toast.error('Please enter a valid email address!');
      return false;
    }

    // Validate phone number (must be digits only and length between 10-15)
    const phonePattern = /^[0-9]{10,15}$/;
    if (!phonePattern.test(phone)) {
      toast.error('Please enter a valid phone number!');
      return false;
    }

    // Validate pincode (must be a 6-digit number)
    const pincodePattern = /^[0-9]{6}$/;
    if (!pincodePattern.test(pincode)) {
      toast.error('Please enter a valid 6-digit pincode!');
      return false;
    }

    return true;
  };

  // Handle Place Order button click
  const handlePlaceOrder = () => {
    if (validateForm()) {
      resetCart();
      navigate('/orders'); // Proceed to the orders page if validation is successful
    }
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <div className="order-subtitle">
            <span>DELIVERY INFORMATION</span>
          </div>
          <div className="details-form flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
          </div>
          <input
            className="details-form email border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <input
            className="details-form street border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            name="street"
            placeholder="Street"
            value={formData.street}
            onChange={handleInputChange}
          />
          <div className="details-form ciate flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleInputChange}
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="state"
              placeholder="State"
              value={formData.state}
              onChange={handleInputChange}
            />
          </div>
          <div className="details-form pincoun flex gap-3">
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="number"
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleInputChange}
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
              type="text"
              name="country"
              placeholder="Country"
              value={formData.country}
              onChange={handleInputChange}
            />
          </div>
          <input
            className="details-form phone border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
      </div>

      <div className="mt-8">
        <div className="mt-8 place-box">
          <CartTotal />
        </div>
        <div className="mt-12">
          <div className="buyord-box">
            <button
              onClick={handlePlaceOrder}
              className="buy-box bg-black text-white text-sm my-8 px-8 py-3"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
