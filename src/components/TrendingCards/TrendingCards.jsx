import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const TrendingCards = ({data}) => {
  const downloads = data.downloads.toLocaleString();
  return (
    <div className="card bg-[#1F2937] shadow-sm flex-wrap">
      <figure>
        <img
          src={data.thumbnail}
          alt="Shoes" 
          className='w-full h-45' />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          <div className="badge bg-yellow-300 text-black gap-1">{data.rating}<IoIosStar></IoIosStar></div>
        </h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          <div className="badge text-white bg-orange-600 mb-8">{downloads}+ Downloads.</div>
        </div>
        <Link className='btn bg-blue-600 rounded-full' to={`/apps/detail/${data.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default TrendingCards;