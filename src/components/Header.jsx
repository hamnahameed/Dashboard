import React from 'react';
import admin from '../assets/images/admin.png';

const Header = () => {
  return (
    <div>
      {/* Header */}
      <div className="h-60 bg-customBlue flex justify-between items-start pt-4 px-4">
        {/* Dashboard heading */}
        <h1 className='text-white text-3xl'>Dashboard</h1>
        
        {/* Search input */}
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search"
            className="p-2 mr-3 rounded border border-gray-300 focus:outline-none"
          />
          {/* Profile image */}
          <img
            src={admin}
            alt="Profile"
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Header;
