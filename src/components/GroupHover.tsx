import React from 'react';

const GroupHover = () => (
  <div className="p-4 group bg-white hover:bg-blue-500">
    <p className="text-gray-900 group-hover:text-white">
      Demo on group hover
    </p>
    <p className="text-gray-700 group-hover:text-red-300">
      When hover, will change the colors of two different p tags
    </p>
  </div>
);

export default GroupHover;