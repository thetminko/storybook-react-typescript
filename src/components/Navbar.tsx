import React from 'react';

const Navbar = () => {
  return (
    <div className="p-2 bg-white text-gray-900 border-b">
      <div className="container mx-auto flex px-2 items-center justify-between">
        <div className="text-lg font-bold tracking-wider">
          Instagram
        </div>
        <div className="hidden md:block">
          <input className="text-gray-900 text-xs text-center border rounded px-2 py-1 bg-gray-100 focus:text-left" type="text" placeholder="Search" />
        </div>
        <div className="hidden md:block">
          <div className="rounded-full border w-8 h-8">

          </div>
        </div>
        <div className="block md:hidden">
          <div className="py-1 cursor-pointer">
            <div className="w-4 border-b border-gray-700 mb-1" />
            <div className="w-4 border-b border-gray-700 mb-1" />
            <div className="w-4 border-b border-gray-700 mb-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;