import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (
    <div className="container mx-auto py-10 lg:px-32 w-full overflow-hidden" id="Testimonials">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Customer <span className="underline underline-offset-4 decoration-1 font-light">Testimonials</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Real Stories from Those Who Found Home with Us
      </p>

      {/* ✅ Grid Layout for Responsive Testimonials ✅ */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {testimonialsData.map((testimonial, index) => (
          <div key={index} className="w-full sm:w-[300px] md:w-[340px] border shadow-lg rounded px-8 py-12 text-center">
            <img className="w-20 h-20 rounded-full mx-auto mb-4" src={testimonial.image} alt={testimonial.alt} />
            <h2 className="text-xl text-gray-700 font-medium">{testimonial.name}</h2>
            <p className="text-gray-500 leading-relaxed">{testimonial.title}</p>

            {/* ⭐ Star Ratings */}
            <div className="flex justify-center gap-1 text-red-500 mb-4">
              {Array.from({ length: testimonial.rating }, (_, index) => (
                <img key={index} src={assets.star_icon} alt="star" className="w-4 h-4" />
              ))}
            </div>

            <p className="text-gray-600 text-center sm:text-left leading-relaxed">
  {testimonial.text}
</p>


          </div>
        ))}
      </div>
      {/* ✅ Ends Here ✅ */}
      
    </div>
  );
};

export default Testimonials;
