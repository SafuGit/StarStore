import React, { useState } from 'react';
import TrendingCards from '../TrendingCards/TrendingCards';
import CategoryCard from './CategoryCard';
import SectionTitle from '../../utils/SectionTitle';

const Categories = ({data}) => {
  const [currentCategory, setCurrentCategory] = useState(data['Productivity']);

  const handleSetCurrentCategory = (category) => {
    setCurrentCategory(data[category]);
  }

  return (
    <div className='w-[90vw] lg:grid grid-cols-4 mx-auto mb-50'>
      <div>
        <ul className="menu menu-xl bg-base-200 rounded-box lg:w-56 w-full mb-4">
          {Object.keys(data).map((category, i) => (
            <li key={i}><a onClick={() => handleSetCurrentCategory(category)}>{category}</a></li>
          ))}
        </ul>
      </div>
      <div className='col-span-3'>
        <SectionTitle title={currentCategory[0].category} className='!mb-8 !my-0 !w-full'></SectionTitle>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-2'>
          {currentCategory.map((app, i) => (
            <CategoryCard data={app} key={i}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;