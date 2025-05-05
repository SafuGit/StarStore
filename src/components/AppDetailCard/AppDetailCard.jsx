import React from 'react';

const AppDetailCard = ({data}) => {
  return (
    <div className='w-[95vw] p-8 mx-auto rounded-xl bg-[#1F2937]'>
      <div>
        <img src={data.banner} alt="" />
      </div>
    </div>
  );
};

export default AppDetailCard;