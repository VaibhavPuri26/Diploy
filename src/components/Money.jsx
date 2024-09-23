import moneyplant from "../assets/moneyplant.png"

function Money() {
    return (
      <div className="flex flex-col items-center min-h-screen bg-gray-100 mb-40">
        <MainContent />
      </div>
    );
  }
  
  
  const MainContent = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center bg-customTeal p-10 mt-10 shadow-lg w-11/12 md:w-9/12">
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-white mb-4">Make Money, Risk-Free</h2>
          <p className="text-white mb-6">You pay for fulfillment only when you make a sale</p>
          <PriceBreakdown />
          <button className="bg-green-600 text-white py-3 px-6 mt-4 rounded">Start selling</button>
          <p className="text-white mt-2">100% Free to use • 900+ Products • Largest print network</p>
        </div>
        <Illustration />
      </div>
    );
  };
  
  const PriceBreakdown = () => {
    return (
      <div className="bg-darkTeal p-4 rounded-lg mt-6 space-y-5">
        <div className="flex justify-between text-white">
          <span>You sell a t-shirt</span>
          <span>$30</span>
        </div>
        <div className="flex justify-between text-white">
          <span>You pay for its production</span>
          <span>$12</span>
        </div>
        <div className="flex justify-between font-semibold text-green-600">
          <span>Your profit</span>
          <span>$18</span>
        </div>
      </div>
    );
  };
  
  const Illustration = () => {
    return (
      <div className="flex-1 mt-6 md:mt-0 md:ml-10">
        <img src={moneyplant} alt="illustration" className="rounded-lg" />
  
      </div>
    );
  };
  
  export default Money;