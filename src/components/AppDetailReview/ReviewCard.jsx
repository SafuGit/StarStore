import React from 'react';
import { IoIosStar } from 'react-icons/io';

const ReviewCard = ({data}) => {
  return (
    <div className='bg-[#1F2937] rounded-lg p-8 w-[90%]'>
      <div className='flex gap-2 mb-2'>
        <h1 className='text-3xl font-medium'>{data.user}</h1>
        <div className='badge bg-yellow-300 text-black gap-1'>{data.rating}<IoIosStar></IoIosStar></div>
      </div>
      <p className='text-gray-300'>{data.comment}</p>
    </div>
  );
};

export default ReviewCard;