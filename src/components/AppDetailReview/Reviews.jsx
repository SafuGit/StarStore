import React from 'react';
import ReviewCard from './ReviewCard';

const Reviews = ({data}) => {
  return (
    <div className='grid sm:grid-cols-2 grid-cols-1 justify-items-center w-[95vw] mx-auto gap-8'>
      {data.map((review, i) => (
        <ReviewCard data={review} key={i}></ReviewCard>
      ))}
    </div>
  );
};

export default Reviews;