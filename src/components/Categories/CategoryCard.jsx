import React from 'react';
import { BsDownload } from 'react-icons/bs';
import { IoIosStar } from 'react-icons/io';
import { Link } from 'react-router';

const CategoryCard = ({data}) => {
  const downloads = data.downloads.toLocaleString();
  return (
    <div className='card bg-gradient-to-b from-slate-700 to-zinc-600 w-full max-w-xs h-96'>
      <figure>
        <img
          src={data.thumbnail}
          alt="Shoes" 
          className='w-full h-40' />
      </figure>
      {/* <div className='divider divider-neutral mt-0'></div> */}
      <div className="card-body">
        <h2 className="card-title">
          {data.name}
          {/* <div className="badge bg-yellow-300 text-black gap-1">{data.rating}<IoIosStar></IoIosStar></div> */}
        </h2>
        <p>{data.description}</p>
        <div className="card-actions justify-end">
          {/* <div className="badge text-white bg-orange-600 mb-8">{downloads}+ Downloads.</div> */}
        </div>
        <div className='flex gap-2'>
          <div className="badge badge-outline badge-soft !badge-warning text-black gap-1">{data.rating}<IoIosStar></IoIosStar></div>
          <div className="badge badge-outline badge-soft !badge-success text-black gap-1">{downloads}+<BsDownload></BsDownload></div>
        </div>
        <Link className='btn bg-yellow-400 rounded-full text-black' to={`/apps/detail/${data.id}`}>View Details</Link>
      </div>
    </div>
  );
};

export default CategoryCard;