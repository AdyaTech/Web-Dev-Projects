import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus('Your message has been sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="contact-page pt-14 px-4 sm:px-8">
      <h1 className="text-3xl sm:text-5xl font-bold text-center mb-6">Contact Us</h1>

      <div className="max-w-2xl mx-auto">
        <p className="text-lg text-center mb-4">We'd love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>

        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              required
            />
          </div>

          <button
            type="submit"
            className={`w-full bg-blue-500 text-white font-semibold py-2 rounded-lg focus:outline-none ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>

        {status && (
          <div className="mt-4 text-center text-green-500">
            <p>{status}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
