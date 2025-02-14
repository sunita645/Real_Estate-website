import React from 'react';
import { assets, testimonialsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <motion.div
    initial={{opacity:0, x:100}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    
    className="container mx-auto py-12 px-6 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-lg mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* ✅ Grid Layout for Responsive Testimonials ✅ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-0">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="bg-white border shadow-lg rounded-lg p-6 text-center flex flex-col items-center">
            <img className="w-20 h-20 rounded-full mb-4" src={testimonial.image} alt={testimonial.alt} />
            <h2 className="text-xl text-gray-700 font-semibold">{testimonial.name}</h2>
            <p className="text-gray-500 mb-2">{testimonial.title}</p>

            {/* ⭐ Star Ratings */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="star" className="w-5 h-5" />
              ))}
            </div>

            <p className="text-gray-600 text-center leading-relaxed max-w-sm">
              {testimonial.text}
            </p>
          </div>
        ))}
      </div>
      {/* ✅ Ends Here ✅ */}
    </motion.div>
  );
};

export default Testimonials;
