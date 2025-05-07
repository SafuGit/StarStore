import React, { use } from 'react';
import FeaturedStoryCard from '../FeaturedStoryCard/FeaturedStoryCard';

const fetchStories = fetch('/featuredStories.json')
  .then(res => res.json());

const FeaturedStories = () => {
  const data = use(fetchStories);
  return (
    <div className='flex gap-4 w-[90vw] mx-auto'>
      {data.map((story, i) => (
        <FeaturedStoryCard data={story} key={i} ></FeaturedStoryCard>
      ))}
    </div>
  );
};

export default FeaturedStories;