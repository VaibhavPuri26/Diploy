import { motion } from 'framer-motion';
import { slideUp } from '../utility/animation';
import HeroImage from '../assets/hero1.gif';

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text content section */}
          <div className="w-full lg:w-1/2 lg:pr-12 space-y-6 mb-8 lg:mb-0">
            <motion.h1 
              variants={slideUp(0.2)} 
              initial="initial" 
              animate="animate" 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900"
            >
              Create and sell <br /><span className="text-gray-500">custom products</span>
            </motion.h1>
            <motion.ul 
              variants={slideUp(0.4)} 
              initial="initial" 
              animate="animate" 
              className="space-y-3 text-lg text-gray-700"
            >
              {['100% Free to use', '900+ High-Quality Products', 'Largest global print network'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  {item}
                </li>
              ))}
            </motion.ul>
            <motion.div 
              variants={slideUp(0.6)} 
              initial="initial" 
              animate="animate" 
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <button type="button" className="w-full sm:w-auto text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-lg px-8 py-3 text-center transition duration-300 ease-in-out">Start for free</button>
              <button type="button" className="w-full sm:w-auto text-gray-700 bg-white border border-gray-300 hover:border-gray-400 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-lg px-8 py-3 text-center flex items-center justify-center transition duration-300 ease-in-out">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                How it works?
              </button>
            </motion.div>
            <p className="text-green-600 text-lg font-medium mt-6">Trusted by over 8M sellers around the world</p>
          </div>
          
          {/* Hero image section */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center">
            <img 
              src={HeroImage} 
              alt="Hero Image" 
              className="w-full max-w-lg lg:max-w-xl xl:max-w-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;