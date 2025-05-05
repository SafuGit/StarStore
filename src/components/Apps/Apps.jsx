import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingApps from './TrendingApps';
import Categories from '../Categories/Categories';

const Apps = () => {
  const data = useLoaderData();
  const highestRating = data.sort((a, b) => b.rating - a.rating).slice(0, 4);
  const categories = data.reduce((result, app) => {
    const category = app.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(app);
    return result;
  }, {})
  return (
    <div>
      <TrendingApps highestRating={highestRating}></TrendingApps>
      <Categories categories={categories}></Categories>
    </div>
  );
};

export default Apps;