import React, { useEffect, useState } from 'react';
import { assets, projectsData } from '../assets/assets';
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(projectsData.length);
      } else {
        setCardsToShow(1);
      }
    };

    updateCardsToShow();
    window.addEventListener('resize', updateCardsToShow);
    
    return () => window.removeEventListener('resize', updateCardsToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div 
    initial={{opacity:0, x:-200}}
    transition={{duration:1}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}

    className="container mx-auto py-4 pt-20 px-6 md:px-20 lg:px-32 my-20 w-full overflow-hidden" id="Projects">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects <span className="underline underline-offset-4 decoration-1 font-light">Completed</span>
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-80 mx-auto">
        Crafting spaces, Building Legacies - Explore Our Portfolio
      </p>

      {/* Slider Buttons */}
      <div className="flex justify-end items-center mb-8">
        <button onClick={prevProject} className="p-3 bg-gray-200 rounded mr-2" aria-label="Previous Projects">
          <img src={assets.left_arrow} alt="Previous" />
        </button>
        <button onClick={nextProject} className="p-3 bg-gray-200 rounded" aria-label="Next Projects">
          <img src={assets.right_arrow} alt="Next" />
        </button>
      </div>

      {/* Project Slider */}
      <div className="overflow-hidden">
        <div
          className="flex gap-8 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)` }}
        >
          {projectsData.map((project, index) => (
            <div key={index} className="relative flex-shrink-0 w-full sm:w-1/4">
              <img src={project.image} alt={project.name} className="w-full h-auto mb-14" />
              <div className="absolute left-0 right-0 bottom-5 flex justify-center">
                <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md text-center">
                  <h2 className="text-lg font-semibold text-gray-800">{project.name}</h2>

                  {/* ✅ Updated Price and Location Alignment ✅ */}
                  <div className="flex flex-col items-center text-gray-600 text-sm mt-1">
                    <p className="font-medium text-base">{project.price.toLocaleString()}</p>
                    <p className="text-xs">{project.location}</p>
                  </div>
                  {/* ✅ Ends Here ✅ */}
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
