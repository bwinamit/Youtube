import React from 'react';

const Button = ({ name }) => {
  return (
    <button className="px-4 py-2 m-2 bg-gray-200 rounded-full hover:bg-gray-300 whitespace-nowrap">
      {name}
    </button>
  );
};

export default Button;
