import React from 'react';
import { FaShareAlt, FaEye, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {
  const {
    author,
    title,
    details,
    rating,
    total_view,
    thumbnail_url,
    published_date,
  } = news;
console.log(news)
  return (
    <div className="bg-white shadow-md rounded-lg pb-4">
      {/* Author and Share Icon */}
      <div className="flex justify-between items-center bg-gray-100 rounded-t-lg p-4 mb-4">
        <div className="flex items-center gap-2">
          <img src={author.img} alt={author.name} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>
        <FaShareAlt className="text-gray-500 cursor-pointer" />
      </div>

      {/* Title */}
      <h2 className="font-bold text-xl text-gray-1 mb-2 px-4">{title}</h2>

      {/* Thumbnail Image */}
      <div className='h-[262px] w-full px-4'>
       <img src={thumbnail_url} alt={title} className="w-full h-full object-cover rounded-md mb-4" />
      </div>

      {/* Description */}
      <p className="text-gray-2 my-4 px-4" >
        {details.substring(0, 300)}... <span className="text-red-500 font-semibold cursor-pointer">Read More</span>
      </p>

      {/* Rating and Views */}
      <div className="flex items-center justify-between text-gray-500 px-4">
        <div className="flex items-center gap-1 text-yellow-400">
          <FaStar />
          <span className="text-black">{rating.number}</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
