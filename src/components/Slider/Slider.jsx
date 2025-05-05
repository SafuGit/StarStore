import { Carousel } from '@kkx64/react-simple-carousel';
import React from 'react';

const Slider = () => {
  return (
    <div className='mb-50'>
      <Carousel autoPlay>
        <img src="https://img.freepik.com/free-vector/banking-business-sale-banner-template_23-2150972725.jpg" alt="" />
        <img src="https://cdn5.f-cdn.com/contestentries/2330502/20167322/654130ed4af30_thumb900.jpg" alt="" />
        <img src="https://img.freepik.com/free-psd/food-online-concept-banner-mock-up_23-2148652328.jpg?semt=ais_hybrid&w=740" alt="" />
      </Carousel>
    </div>
  );
};

export default Slider;