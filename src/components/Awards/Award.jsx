import React from 'react';
import { useLoaderData } from 'react-router';
import AwardCard from './AwardCard';

const Award = () => {
  const data = useLoaderData();
  return (
    <div className='w-[95vw] mx-auto'>
      <h1 className='font-bold text-5xl text-center'>StarStore Awards.</h1>
      <div className='divider'></div>
      <div className='grid grid-cols-2 gap-20'>
        {data.awards.map((award, i) => (
          <AwardCard data={award} key={i}></AwardCard>
        ))}
      </div>
    </div>
  );
};

export default Award;