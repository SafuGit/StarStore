import React from 'react';
import { IoIosStar } from 'react-icons/io';

const TrendingAppCard = ({ data }) => {
  return (
    <div className="card w-72 bg-base-100 shadow-xl transition-transform hover:scale-[1.03] hover:shadow-2xl">
      <figure className="h-40 bg-blue-500">
        <img
          src={data.banner}
          alt={data.name}
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body bg-neutral text-neutral-content rounded-b-xl">
        <h2 className="card-title text-white text-lg">{data.name}</h2>
        <div className="flex items-center gap-1 text-yellow-400">
          <span className="text-lg font-semibold">{data.rating}</span>
          <IoIosStar className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default TrendingAppCard;
