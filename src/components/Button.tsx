import React, { FC } from 'react';
// import './button.css';

export interface Props {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const Button: FC<Props> = ({ primary = true, size = 'medium', label, ...props }) => {
  let classes = '';

  if (primary) {
    classes = 'bg-blue-900 text-white';
  } else {
    classes = 'bg-transparent text-gray-900 border';
  }

  switch (size) {
    case 'small':
      classes += ' text-sm px-2 py-1';
      break;
    case 'medium':
      classes += ' text-base px-3 py-1';
      break;
    case 'large':
      classes += ' text-lg px-4 py-2';
      break;
    default:
      classes += '';
      break;
  }

  return (
    <button
      type="button"
      className={`${classes} rounded`}
      {...props}>
      {label}
    </button>
  );
};

export default Button;