import React from 'react';
import { BiCrown } from 'react-icons/bi';
import { GiCrown } from 'react-icons/gi';
import { IoIosTrophy } from 'react-icons/io';

const AwardCard = ({data}) => {
  return (
    <div className='bg-[#1F2937] rounded-lg p-8 flex flex-col lg:flex-row w-[80%] sm:w-full mx-auto'>
      <IoIosTrophy className='text-9xl text-yellow-300'></IoIosTrophy>
      <div className='divider sm:divider-horizontal'></div>
      <div>
        <h1 className='text-3xl sm:truncate font-bold'>{data.title}</h1>
        <p className='text-gray-300'>{data.description}</p>
        <div className='flex gap-2 mt-4'>
          <GiCrown className='text-yellow-300 rounded-full text-3xl'></GiCrown>
          <p className='font-semibold text-lg'>{data.app.name}</p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;