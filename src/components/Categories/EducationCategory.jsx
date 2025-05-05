import React from 'react';
import AppCard from './AppCard';
import SectionTitle from '../../utils/SectionTitle';

const EducationCategory = ({data}) => {
  return (
    <div className='w-[95vw] mx-auto'>
      <SectionTitle title={'Educational Apps'}></SectionTitle>
      <div className='grid grid-cols-3 place-items-center'>
        {data.map((app, i) => (
          <AppCard data={app} key={i}></AppCard>
        ))}
      </div>
      <AppCard></AppCard>
    </div>
  );
};

export default EducationCategory;