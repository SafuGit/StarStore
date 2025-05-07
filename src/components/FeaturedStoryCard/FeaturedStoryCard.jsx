import React from 'react';

const FeaturedStoryCard = ({data}) => {
  return (
    <div className='w-full bg-[#1F2937] rounded-xl p-8 grid'>
      <h1 className='text-xl font-bold text-white truncate'>{data.title}</h1>
      <div className='divider'></div>
      <p className='text-gray-300 text-lg mb-20'>{data.summary}</p>
      <button className='btn bg-blue-600 w-full rounded-full'>{data.cta.text}</button>
    </div>
  );
};

export default FeaturedStoryCard;