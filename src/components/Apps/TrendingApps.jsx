import React from 'react';
import TrendingAppCard from '../Cards/TrendingAppCard';
import SectionTitle from '../../utils/SectionTitle';

const TrendingApps = ({highestRating}) => {
  return (
    <>
      <SectionTitle title={'Trending Apps'}></SectionTitle>
      <div className='flex justify-center gap-4'>
        {highestRating.map((data, i) => (
          <TrendingAppCard key={i} data={data}></TrendingAppCard>
        ))}
      </div>
    </>
  );
};

export default TrendingApps;