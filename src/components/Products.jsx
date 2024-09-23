import { motion } from 'framer-motion';
import ProductsImage from "../assets/ProductsImage.png";

const ProductDesign = () => {
  return (
    <div className="bg-white py-8 sm:py-16 mb-16 sm:mb-[220px]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start md:ml-2 lg:ml-4 xl:ml-8">
          <div className="relative bg-green-500 p-4 sm:p-8 rounded-2xl w-[300px] h-[400px] sm:w-[350px] sm:h-[480px] md:w-[400px] md:h-[550px]">
            <img
              src={ProductsImage}
              alt="Product Items"
              className="rounded-2xl object-cover w-full h-full"
            />
            {/* Add + buttons only to cap, t-shirt, and mug */}
            <button className="absolute top-1/4 left-1/4 bg-white rounded-full w-6 h-6 flex items-center justify-center text-green-500 font-bold text-sm shadow-md">
              +
            </button>
            <button className="absolute top-1/2 left-1/4 bg-white rounded-full w-6 h-6 flex items-center justify-center text-green-500 font-bold text-sm shadow-md">
              +
            </button>
            <button className="absolute bottom-1/4 right-1/4 bg-white rounded-full w-6 h-6 flex items-center justify-center text-green-500 font-bold text-sm shadow-md">
              +
            </button>
            {/* Edit/Preview box */}
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white rounded-md shadow-md flex">
              <button className="px-3 sm:px-4 py-2 bg-gray-100 text-gray-700 rounded-l-md text-sm sm:text-base">Edit</button>
              <button className="px-3 sm:px-4 py-2 text-gray-700 rounded-r-md text-sm sm:text-base">Preview</button>
            </div>
          </div>
        </div>
        {/* Right Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-left mt-8 md:mt-0 md:ml-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Easily add your design to a<br className="hidden sm:inline" />wide range of products
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mb-6">
            With our free design tools, you can easily add your custom designs to<br className="hidden sm:inline" />t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className="text-green-500 font-semibold text-lg flex items-center">
            All products
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDesign;