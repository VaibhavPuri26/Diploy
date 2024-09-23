const platforms = [
    { name: "Shopify", logo: "src/assets/shopify.svg", top: "85%", left: "51%" },
    { name: "Wix", logo: "src/assets/Wix.svg", top: "9%", left: "75%", size: "w-25 h-30" },
    { name: "printify", logo: "src/assets/logo.png", top: "40%", left: "45%", size: "w-40 h-50" },
    { name: "Etsy", logo: "src/assets/Etsy.svg", top: "70%", left: "75%" },
    { name: "Squarespace", logo: "src/assets/squarespace.svg", top: "20%", left: "60%" },
    { name: "WooCommerce", logo: "src/assets/woocommerce.svg", top: "45%", left: "70%", size: "w-20 h-30" },
    { name: "API", logo: "src/assets/api.svg", top: "60%", left: "20%" },
    { name: "BigCommerce", logo: "src/assets/bigcommerce.svg", top: "20%", left: "40%", size: "w-20 h-30" },
    { name: "AddMore", logo: "src/assets/addmore.svg", top: "78%", left: "43%", size: "w-20 h-30" },
    { name: "PrestaShop", logo: "src/assets/prestashop.svg", top: "50%", left: "35%" },
  ];
  
  const lines = [
    { from: { top: "50%", left: "50%" }, to: { top: "85%", left: "52%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "10%", left: "75%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "70%", left: "75%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "20%", left: "60%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "45%", left: "70%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "60%", left: "20%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "20%", left: "40%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "78%", left: "43%" } },
    { from: { top: "50%", left: "50%" }, to: { top: "50%", left: "35%" } },
  ];
  
  const App = () => {
    return (
      <div className="relative min-h-screen bg-gray-50 flex items-center justify-center">
        <h1 className="absolute text-4xl font-bold mb-8 top-4">Connect your store</h1>
        <h4 className="absolute text-gray-400 top-20">Printify easily integrates with major e-commerce platforms and marketplaces</h4>
        <div className="relative w-full h-[600px]">
          {/* Render lines */}
          <svg className="absolute w-full h-full">
            {lines.map((line, index) => (
              <line
                key={index}
                x1={`calc(${line.from.left})`}
                y1={`calc(${line.from.top})`}
                x2={`calc(${line.to.left})`}
                y2={`calc(${line.to.top})`}
                stroke="lightgrey"
                strokeWidth="0.5"
              />
            ))}
          </svg>
  
          {/* Render platforms */}
          {platforms.map((platform, index) => (
            <div
              key={index}
              style={{ top: platform.top, left: platform.left }}
              className={`absolute ${platform.size} ${platform.bgColor} shadow-lg rounded-lg p-4 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer overflow-hidden`}
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="w-full h-full object-contain rounded-[20px]" // Added border-radius
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default App;
  