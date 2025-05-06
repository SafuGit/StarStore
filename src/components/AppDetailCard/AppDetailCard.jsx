import React from 'react';
import { BsPerson } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';

const AppDetailCard = ({data, installed, handleSetInstalled}) => {
  const downloads = data.downloads.toLocaleString();
  return (
    <div className='w-[95vw] p-8 mx-auto rounded-xl bg-[#1F2937] mt-10'>
      <h1 className='text-3xl text-center font-bold'>App Information</h1>
      <div className='divider'></div>
      <div className='grid grid-cols-4'>
        <div className='col-span-1'>
          <img src={data.banner} alt="" />
        </div>
        <div className='col-span-3'>
          <div className='flex gap-1 mb-2'>
            <h1 className='text-3xl font-bold'>{data.name}</h1>
            <div className='badge bg-yellow-300 text-black gap-1'>{data.rating}<IoIosStar></IoIosStar></div>
          </div>
          <div className='flex gap-2 mb-4'>
            <div className='badge bg-blue-600 text-white gap-1'>{data.category}</div>
            <div className='badge bg-orange-600 text-white gap-1'>{downloads}+ Downloads</div>
          </div>
          <div className='flex gap-2 mb-4'>
            <div className='rounded-full p-2 bg-blue-600'><BsPerson></BsPerson></div>
            <p className='text-xl font-medium'>{data.developer}</p>
          </div>
          <div className='flex gap-2 mb-1'>
            <p>Features:</p>
            {data.features.map((feature, i) => (
              <div className='badge badge-info gap-1 font-bold' key={i}>{feature}</div>
            ))}
          </div>
          <p className='text-xl text-gray-400'>{data.description}</p>
        </div>
      </div>
      <button className={installed ? 'btn bg-red-600 w-full rounded-full mt-10' : 'btn bg-green-600 w-full rounded-full mt-10'} onClick={() => handleSetInstalled()}>{installed ? "Uninstall" : "Install App"}</button>
    </div>
  );
};

export default AppDetailCard;