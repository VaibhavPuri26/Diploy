import customproducts from '../assets/customproducts.png';
import sellproducts from '../assets/sellproducts.png';
import fulfillment from '../assets/fullfillment.png';
const PictureCards = () => {
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

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        {features.map((feature, index) => (
          <div key={index} className="flex-1">
            <div className="flex flex-col items-center text-center">
              <div className="mb-6">
                <img src={feature.image} alt={feature.title} className="w-32 h-32 object-contain" />
              </div>
              <h2 className="text-lg font-semibold text-green-500 uppercase mb-2">{feature.title}</h2>
              <h3 className="text-2xl font-bold mb-3">{feature.subtitle}</h3>
              <p className="text-gray-600 max-w-xs">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PictureCards;

