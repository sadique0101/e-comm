import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

import NewArrivalCards from '../Cards/NewArrivalCard';

const NewArrival = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Adjust this value to show how many cards you want at once
    slidesToScroll: 1,
  };

  return (
    <div className='w-full  mt-10 p-20 flex flex-col'>
      <h1 className='text-[32px] font-bold mb-6'>NewArrival Products</h1>
      <Slider {...settings}>
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
        <NewArrivalCards />
      </Slider>
    </div>
  );
}

export default NewArrival;