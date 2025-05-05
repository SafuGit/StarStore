import React from 'react';

const SectionTitle = ({title}) => {
  return (
    <div className="text-center my-10">
      <h2 className="text-3xl md:text-4xl font-bold text-white">{title}</h2>
    </div>
  );
};

export default SectionTitle;