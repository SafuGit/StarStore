import React from 'react';
import { useLoaderData } from 'react-router';
import TrendingApps from './TrendingApps';

const Apps = () => {
  const data = useLoaderData();
  const highestRating = data.sort((a, b) => b.rating - a.rating).slice(0, 4);
  return (
    <div>
      <TrendingApps highestRating={highestRating}></TrendingApps>
    </div>
  );
};

export default Apps;