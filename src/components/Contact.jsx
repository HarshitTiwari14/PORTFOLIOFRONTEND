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
      const response = await axios.post('http://localhost:5000/contact', formData);
      setResponseMessage(response.data.message);
      setFormData({ name: '', email: '', message: '' }); // Clear the form
    } catch (error) {
      setResponseMessage(error.response?.data?.error || 'Something went wrong.');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen border-gray-900">
      <h1 className="text-3xl font-bold mb-6 text-white">Contact Us</h1>
      <form className="w-full max-w-md bg-white p-6 shadow-md rounded-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="name">
            Name
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded-lg"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded-lg"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
      {responseMessage && (
        <p className="mt-4 text-center text-lg text-gray-700">{responseMessage}</p>
      )}
    </div>
  );
};
