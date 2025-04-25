import React from 'react';
import { useLocation } from 'react-router-dom';
import {bagProducts} from '../Data/index.js'
import { IoHeart } from "react-icons/io5"
import { FaTruck } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
function HeroSectionDetail() {
    const url = useLocation();
    const product= bagProducts.find((product) => product.url === url.pathname);
    const [image, setImage] = React.useState(product.img);
  return (
    <div className="flex flex-col md:flex-row gap-8 p-6">
      {/* Left Section: Product Images */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Main Product Image */}
        <div className="bg-gray-100 rounded-lg p-4 flex items-center justify-center mb-4">
          <img
            src={image} // Replace with actual product image URL
            alt="Product"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Thumbnail Images */}
        <div className="flex flex-wrap gap-2">
          <img
          onClick={() => setImage(product.img2)}
            src={product.img2} // Replace with actual thumbnail image URL
            alt="Thumbnail 1"
            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
          />
          <img
           onClick={() => setImage(product.img3)}
            src={product.img3} // Replace with actual thumbnail image URL
            alt="Thumbnail 2"
            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
          />
          <img
           onClick={() => setImage(product.img4)}
            src={product.img4} // Replace with actual thumbnail image URL
            alt="Thumbnail 3"
            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
          />
          <img
           onClick={() => setImage(product.img5)}
            src={product.img5} // Replace with actual thumbnail image URL
            alt="Thumbnail 4"
            className="w-20 h-20 object-contain border rounded-lg cursor-pointer"
          />
          <div className="w-20 h-20 flex items-center justify-center border rounded-lg cursor-pointer">
            +4 more
          </div>
        </div>
      </div>

      {/* Right Section: Product Details */}
      <div className="flex flex-col w-full md:w-1/2">
        {/* Brand and Title */}
        <div className="mb-4">
          <h4 className="text-gray-500 text-sm">{product.tagline}</h4>
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <div className="flex items-center gap-1 text-yellow-500 text-sm mt-2">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <span className="text-gray-500 ml-2">(42 reviews)</span>
          </div>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-black mb-4">{product.price}</div>

        {/* Color Options */}
        {/* <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Color</h4>
          <div className="flex gap-2">
            <div className="w-8 h-8 bg-gray-200 border rounded-full cursor-pointer"></div>
            <div className="w-8 h-8 bg-black border rounded-full cursor-pointer"></div>
            <div className="w-8 h-8 bg-white border rounded-full cursor-pointer"></div>
          </div>
        </div> */}

        {/* Size Options */}
        {/* <div className="mb-4">
          <h4 className="text-sm font-semibold mb-2">Size - EU Men</h4>
          <div className="grid grid-cols-4 gap-2">
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">40.5</button>
            <button className="border rounded-lg px-4 py-2 text-sm bg-black text-white">41</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">42</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">43</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">43.5</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">44</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">44.5</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">45</button>
            <button className="border rounded-lg px-4 py-2 text-sm hover:bg-gray-100">46</button>
          </div>
          <a href="#" className="text-blue-500 text-sm mt-2 inline-block hover:underline">
            Size guide
          </a>
        </div> */}

        {/* Add to Cart Button */}
        <div className="flex items-center gap-4">
          <a href={`${url.pathname}/checkout`} className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800">
            Add to cart
          </a>
          <button className="border rounded-lg text-xl px-6 py-3 hover:bg-gray-100">
            <IoHeart />
          </button>
        </div>

        {/* Free Delivery Info */}
        <p className="text-gray-500 flex items-center gap-3 text-sm mt-4">
          <FaTruck /> Free delivery on orders over $30.0
        </p>
      </div>
    </div>
  );
}

export default HeroSectionDetail;
