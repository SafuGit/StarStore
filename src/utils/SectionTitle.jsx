import React from 'react';

const SectionTitle = ({title, className}) => {
  return (
    <div className={`w-[90vw] mx-auto my-10 ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;