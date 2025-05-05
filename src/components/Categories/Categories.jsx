import React from 'react';
import EducationCategory from './EducationCategory';
import GamingCategory from './GamingCategory';
import ProductivityCategory from './ProductivityCategory';

const Categories = ({categories}) => {
  return (
    <div>
      <EducationCategory data={categories["Education"]}></EducationCategory>
      <GamingCategory data={categories["Gaming"]}></GamingCategory>
      <ProductivityCategory data={categories["Productivity"]}></ProductivityCategory>
    </div>
  );
};

export default Categories;