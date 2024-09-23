import customproducts from '../assets/customproducts.png';
import sellproducts from '../assets/sellproducts.png';
import fulfillment from '../assets/fullfillment.png';
import { motion } from 'framer-motion';

const PictureCard = () => {
  const features = [
    {
      image: customproducts,
      title: "CREATE",
      subtitle: "custom products",
      description: "Easily add your designs to a wide range of products using our free tools"
    },
    {
      image: sellproducts,
      title: "SELL",
      subtitle: "on your terms",
      description: "You choose the products, sale price, and where to sell"
    },
    {
      image: fulfillment,
      title: "WE HANDLE",
      subtitle: "fulfillment",
      description: "Once an order is placed, we automatically handle all the printing and delivery logistics"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-[120px] text-center">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start space-y-8 md:space-y-0 md:space-x-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex-1 w-full md:w-auto max-w-sm"
            initial="hidden"
            whileInView="visible"
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            variants={cardVariants}
          >
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img src={feature.image} alt={feature.title} className="w-32 h-32 object-contain" />
              </div>
              <h2 className="text-lg font-semibold text-green-500 uppercase mb-2">{feature.title}</h2>
              <h3 className="text-2xl font-bold mb-3">{feature.subtitle}</h3>
              <p className="text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default PictureCard;