import React, { useState } from 'react';
import axios from 'axios';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_BASE = import.meta.env.VITE_API_BASE_URL || "http://localhost:5000";
      console.log('Sending form data:', formData);
      
      const response = await axios.post(`${API_BASE}/api/contact`, formData);

      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setResponseMessage(error.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">Contact Us</h1>
      
      <form className="w-full max-w-md bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition"
        >
          Submit
        </button>
      </form>

      {responseMessage && (
        <p className="mt-4 text-center text-lg text-green-700 font-medium">{responseMessage}</p>
      )}
    </div>
  );
};
