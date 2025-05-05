import React from 'react';
import SectionTitle from '../../utils/SectionTitle';
import { Outlet, useLoaderData } from 'react-router';
import TrendingCards from '../TrendingCards/TrendingCards';
import HeroHome from '../Home/HeroHome';
import Slider from '../Slider/Slider';


const Apps = () => {
  const data = useLoaderData();
  const highestRatedArray = data.sort((a, b) => b.rating - a.rating).slice(0, 4);
  console.log(highestRatedArray);
  return (
    <>
      <HeroHome></HeroHome>
      <SectionTitle title={"From our Sponsors."}></SectionTitle>
      <Slider></Slider>
      <SectionTitle title={'Trending Apps'}></SectionTitle>
      <div className='grid grid-cols-4 gap-2 justify-center w-[90vw] mx-auto'>
        {highestRatedArray.map((app, i) => (
          <TrendingCards data={app} key={i}></TrendingCards>
        ))}
      </div>
    </>
  )
};

export default Apps;