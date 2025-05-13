import React from 'react';
import Button from './Button';

const categories = [
  'All', 'Music', 'Gaming', 'News', 'Live', 'Sports',
  'Comedy', 'Education', 'Entertainment', 'Science',
  'Technology', 'Travel', 'Food', 'Health',
  'Fashion', 'Lifestyle', 'DIY', 'Animals'
];

const Buttonlist = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap p-2">
      {categories.map((category, index) => (
        <Button key={index} name={category} />
      ))}
    </div>
  );
};

export default Buttonlist;
