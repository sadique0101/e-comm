import React from 'react';
import {bagProducts} from '../Data/index.js'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 

function SimilarProducts() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5, 
        slidesToScroll: 3,
        autoplaySpeed: 3000,
        autoplay: true,
        cssEase: "ease-out",
      };
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Similar products</h2>
      <div className=" overflow-hidden w-full py-5">
        <Slider {...settings}>
        {bagProducts.map((product) => (
          <a
            href={product.url}
            key={product.url}
            className="w-60 bg-white p-4 rounded-lg shadow-lg flex-shrink-0"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-32 object-contain mb-4"
            />
            <h3 className=" mb-2 line-clamp-2">{product.title}</h3>
            <div className="flex items-center text-green-600 text-sm mb-2">
              <span className="font-bold">4.6★</span>
              <span className="ml-2 text-gray-500">(380)</span>
              {product.assured && (
                <img
                  src="https://via.placeholder.com/20" // Replace with actual assured icon URL
                  alt="Assured"
                  className="ml-2 w-4 h-4"
                />
              )}
            </div>
            <div className=" font-semibold text-sm text-black">{product.price}</div>
            <div className="text-sm text-gray-500 line-through">
              {product.originalPrice}
            </div>
            <div className="text-sm text-green-600">{product.discount}</div>
          </a>
        ))}
        </Slider>
      </div>
    </div>
  );
}

export default SimilarProducts;
