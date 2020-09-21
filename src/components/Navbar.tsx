import React from 'react';

const Navbar = () => {
  return (
    <div className="p-2 bg-white text-gray-900 border">
      <div className="container mx-auto flex px-2 justify-around items-center">
        <div className="text-lg font-bold tracking-wider">
          Instagram
        </div>
        <div>
          <input className="text-gray-900 text-xs text-center border rounded px-2 py-1 bg-gray-100 focus:text-left" type="text" placeholder="Search" />
        </div>
        <div>
          <div className="rounded-full border w-8 h-8">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;