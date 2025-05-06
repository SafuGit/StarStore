import React, { useState } from 'react';
import TrendingCards from '../TrendingCards/TrendingCards';
import CategoryCard from './CategoryCard';

const Categories = ({data}) => {
  const [currentCategory, setCurrentCategory] = useState(data['Productivity']);

  const handleSetCurrentCategory = (category) => {
    setCurrentCategory(data[category]);
  }

  return (
    <div className='w-[90vw] grid grid-cols-4 mx-auto'>
      <div>
        <ul className="menu menu-xl bg-base-200 rounded-box w-56">
          {Object.keys(data).map((category, i) => (
            <li key={i}><a onClick={() => handleSetCurrentCategory(category)}>{category}</a></li>
          ))}
        </ul>
      </div>
      <div className={currentCategory.length == 3 ? "col-span-3" : currentCategory.length == 2 ? "col-span-2" : currentCategory.length == 1 ? "col-span-1" : ""}>
        <div className='flex justify-center items-center gap-2'>
          {currentCategory.map((app, i) => (
            <CategoryCard data={app} key={i}></CategoryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;