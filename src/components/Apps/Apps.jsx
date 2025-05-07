import React, { Suspense } from 'react';
import SectionTitle from '../../utils/SectionTitle';
import { Outlet, useLoaderData } from 'react-router';
import TrendingCards from '../TrendingCards/TrendingCards';
import HeroHome from '../Home/HeroHome';
import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import Loading from '../Loading/Loading';
import FeaturedStories from '../FeaturedStories/FeaturedStories';
import './Apps.css';


const Apps = () => {
  const data = useLoaderData();
  const highestRatedArray = data.sort((a, b) => b.rating - a.rating).slice(0, 4);
  const categories = data.reduce((result, app) => {
    const category = app.category;
    if (!result[category]) {
      result[category] = [];
    }
    result[category].push(app);
    return result;
  }, {})
  return (
    <>
      <HeroHome></HeroHome>
      <SectionTitle title={"From our Sponsors."}></SectionTitle>
      <Slider></Slider>
      <SectionTitle title={'Trending Apps'}></SectionTitle>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 justify-center w-[90vw] mx-auto mb-60'>
        {highestRatedArray.map((app, i) => (
          <TrendingCards data={app} key={i}></TrendingCards>
        ))}
      </div>
      <SectionTitle title={'Categories'}></SectionTitle>
      <Categories data={categories}></Categories>
      <div className='storySection sm:p-4 mt-20'>
        <SectionTitle title={'Featured Stories'} className={''}></SectionTitle>
        <Suspense fallback={<Loading></Loading>}>
          <FeaturedStories></FeaturedStories>
        </Suspense>
      </div>
    </>
  )
};

export default Apps;