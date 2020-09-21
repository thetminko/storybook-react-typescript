import React from 'react';

const ColorPill = ({ size = 'w-1/3', bgColor = '', requireBorder = false }) => (
  <div className={`justify-center ${size}`}>
    <div className="flex items-center">
      <div className={`w-12 h-12 rounded ${bgColor} mr-2 ${requireBorder && 'border'}`} />
      <div>
        {bgColor}
      </div>
    </div>
  </div>
);

export default ColorPill;