import React from 'react';
import Slider from 'react-slick';
import AttractiveCard from '../Cards/AttractiveCard'; // Make sure the path is correct
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import LatestCard from '../Cards/LatestCard';

const Latest = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Adjust this value to show how many cards you want at once
    slidesToScroll: 1,
  };

  return (
    <div className='w-full bg-white my-10 p-20 flex flex-col'>
        <style>
  {`
    .custom-slider .slick-prev,
    .custom-slider .slick-next {
      color: pink; /* Change the arrow color to pink */
    }

    .custom-slider .slick-prev:before,
    .custom-slider .slick-next:before {
      color: pink; /* If using default arrows */
    }
  `}
</style>

      <h1 className='text-[32px] font-bold mb-6'>Top Selling Products</h1>
      <Slider {...settings} className='custom-slider'>
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
        <LatestCard />
      </Slider>
    </div>
  );
}

export default Latest;
