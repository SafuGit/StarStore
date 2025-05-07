import { Carousel } from '@kkx64/react-simple-carousel';
import React from 'react';

const Slider = () => {
  return (
    <div className='mb-50 w-[90vw] mx-auto p-8 bg-[#1F2937] rounded-lg'>
      <Carousel autoPlay>
        <img src="https://cdn.dribbble.com/userupload/15932428/file/original-be0f189a148dc2f948fb4d79c05d8c8f.jpg?resize=1011x297&vertical=center" alt="" />
        <img src="https://cdn5.f-cdn.com/contestentries/2330502/20167322/654130ed4af30_thumb900.jpg" alt="" />
        <img src="https://cdn.dribbble.com/userupload/24072560/file/original-a19159e3c64de75cdbd778d142a5abba.png?resize=1011x297&vertical=center" alt="" />
      </Carousel>
    </div>
  );
};

export default Slider;