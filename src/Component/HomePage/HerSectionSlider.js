import React from 'react';
import bag1 from '../../assets/bags/1/1.jpg';
import bag2 from '../../assets/bags/2/1.jpg';
import bag3 from '../../assets/bags/3/1.jpg';
import bag4 from '../../assets/bags/4/1.jpg';
import bag5 from '../../assets/bags/5/1.jpg';
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import './style.css'
import HotOffer from './HotOffer';
function HerSectionSlider() {
    const bagProducts = [
        {
          tagline: "YOUR STYLE, YOUR WAY",
          title: "Premium Travel Bags",
          description: "Organize in style! Discover durable, sleek, and spacious bags perfect for every journey.",
          price: "₹7,499 INR",
          img: bag1,
        },
        {
          tagline: "READY FOR THE DAILY GRIND",
          title: "Classic Laptop Bags",
          description: "Built for work and comfort. Carry your essentials with elegance and strength.",
          price: "₹4,299 INR",
          img: bag2,
        },
        {
          tagline: "WHERE FASHION MEETS FUNCTION",
          title: "Designer Handbags",
          description: "Turn heads with luxurious designs that elevate your everyday look.",
          price: "₹6,999 INR",
          img: bag3,
        },
        {
          tagline: "ADVENTURE AWAITS",
          title: "Outdoor Backpacks",
          description: "Gear up with high-performance backpacks built for the wild and the weekend.",
          price: "₹5,999 INR",
          img: bag4,
        },
        {
          tagline: "SIMPLY ESSENTIAL",
          title: "Everyday Tote Bags",
          description: "Roomy, reliable, and effortlessly stylish – your perfect everyday companion.",
          price: "₹2,999 INR",
          img: bag5,
        }
      ];
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Adjust this value to show how many cards you want at once
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "ease-out",
      };
    
  return (
    <div className="flex flex-col md:flex-row max-h-[400px] gap-6 p-6">
      {/* iPhone 13 Pro Section */}
      <div className='w-[65%] rounded-lg bg-white shadow-lg overflow-hidden'>
      <div className='w-full h-full overflow-hidden'>
      <Slider {...settings}>
        {bagProducts.map((product, index) =>{
            return (  
                <div className='h-full w-full' key={index}>
        <div className="flex flex-row px-5 py-10 items-start flex-nowrap relative h-full w-full">
      
        <div className="p-6 flex-1 flex flex-col justify-center">
        <h4 className="text-blue-500 text-sm font-semibold uppercase mb-2">
           - {product.tagline}
          </h4>
          <h2 className="text-2xl font-bold mb-4">{product.title}</h2>
          <p className="text-gray-600 text-sm mb-4">
          {product.description}
          </p>
          <h3 className="text-xl font-bold text-black mb-4">{product.price}</h3>
          <button className="bg-blue-500 flex items-center justify-center gap-3 w-max text-white px-4 py-2 rounded hover:bg-blue-600">
            Shop Now
            <FaArrowRight className=' text-sm' />
          </button>
        </div>
        
        <div className="flex items-start w-[45%]  justify-start">
          <img
            src={product.img}
            alt="iPhone 13 Pro"
            className="w-[320px] object-contain"
          />
        </div>
      </div>
      </div>
      )
      })}
      </Slider>
      </div>
      </div>

      <div className='flex flex-1'>
        <HotOffer />
      </div>
    </div>
  );
}

export default HerSectionSlider;
