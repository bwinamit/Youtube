import React from 'react';

const LiveComments = ({ name, message }) => {
  return (
    <div className="flex items-start space-x-3 p-2 border-b border-gray-200">
      {/* Dummy User Icon */}
      <div className="w-8 h-8 bg-gray-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
        {name?.charAt(0).toUpperCase()}
      </div>

      {/* Name and Message */}
      <div>
        <div className="font-semibold text-sm text-gray-800">{name}</div>
        <div className="text-sm text-gray-700">{message}</div>
      </div>
    </div>
  );
};

export default LiveComments;
