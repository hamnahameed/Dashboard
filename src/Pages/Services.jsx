import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const Services = () => {
  const [formData, setFormData] = useState({
    serviceName: '',
    description: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <div className='flex'>
        <Sidebar />

        <div className='flex flex-col w-screen bg-gray-200'>
          <Header />

          
          <div className="container mx-auto -mt-12 mb-5 bg-white border rounded-md shadow-2xl p-5 w-3/4">
            <h1 className="text-2xl font-bold mb-4 bg-customBlue-700 p-3 text-white">Add New Service</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="serviceName" className="block text-sm font-semibold mb-2">Service Name</label>
                <input
                  type="text"
                  id="serviceName"
                  name="serviceName"
                  value={formData.serviceName}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  rows="4"
                ></textarea>
              </div>
              <div className="mb-4">
                <label htmlFor="image" className="block text-sm font-semibold mb-2">Image URL</label>
                <input
                  type="text"
                  id="image"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="p-2 w-full border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              {/* Add more form fields as needed */}
              <button type="submit" className="bg-customBlue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Submit</button>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </>
  );
};

export default Services;
