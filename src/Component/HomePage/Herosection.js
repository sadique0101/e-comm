import React from 'react';
import HeroRightBox from './HeroRight';
const Herosection = () => {
  return (
    <div className="w-full h-[50vh] md:h-[70vh]">
      <div
        className="w-full h-full flex items-center justify-center md:justify-start"
        style={{
          backgroundImage: "url('https://watermark.lovepik.com/photo/20211118/large/lovepik-e-commerce-merchandise-womens-bag-shooting-picture_500124773.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <HeroRightBox />
      </div>
    </div>
  );
};

export default Herosection;
