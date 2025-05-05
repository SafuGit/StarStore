import React from 'react';

const AppCard = () => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl cursor-pointer transition-all">
      <figure>
        <img src="/api/placeholder/200/200" alt="App Thumbnail" className="w-full h-40 object-cover" />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold">Photo Editor Pro</h2>
        <div className="flex items-center mt-1">
          {/* <Star className="h-4 w-4 text-yellow-500 mr-1" /> */}
          <span className="text-sm">4.8</span>
        </div>
        <div className="flex items-center mt-1">
          {/* <Download className="h-4 w-4 text-gray-500 mr-1" /> */}
          <span className="text-sm">2.3M downloads</span>
        </div>
        <div className="card-actions mt-3">
          <button className="btn bg-blue-500 btn-sm w-full">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default AppCard;