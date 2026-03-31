import React from 'react';

const PricingCard = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  p-8 max-w-7xl mx-auto items-center items-stretch">

      {/* Card 1 */}

      <div className="relative w-full max-w-md ">
        
        
        {/* Main Card */}

        <div className="card shadow-2xl overflow-hidden h-full">
          <div className="card-body p-6 pb-8">
            
           
            <div className="mb-1">
              <h2 className="text-4xl font-bold tracking-tight">Starter</h2>
            </div>

            
            <p className="text-base-content/70 text-lg mb-1">
              Perfect for getting started
            </p>

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$0</span>
                <span className="text-2xl font-medium text-base-content/70 ml-2">/Month</span>
              </div>
            </div>

            
            <div className=" mb-8 text-base-content/70">
              <div className="flex items-start gap-3 ">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Access to 10 free tools</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Basic templates</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Community support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">1 project per month</span>
              </div>
             
            </div>

            {/* Button */}
            <button className="btn btn-block bg-white hover:bg-gray-300 text-violet-700 font-semibold text-lg py-7 rounded-2xl shadow-md transition-all">
              Start Pro Trial
            </button>

          </div>
        </div>

        
      </div>



      {/* Card 2 */}

      <div className="relative w-full max-w-md">
        
        {/* Most Popular Badge */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-yellow-300 text-yellow-900 text-sm font-semibold px-6 py-1 rounded-full shadow-md">
            Most Popular
          </div>
        </div>

        {/* Main Card */}

        <div className="card bg-gradient-to-r from-blue-800 to-purple-700 text-white shadow-2xl overflow-hidden">
          <div className="card-body p-6 pb-8">
            
           
            <div className="mb-1">
              <h2 className="text-4xl font-bold tracking-tight">Pro</h2>
            </div>

            
            <p className="text-violet-200 text-lg mb-1">
              Best for professionals
            </p>

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$29</span>
                <span className="text-2xl font-medium text-violet-200 ml-2">/Month</span>
              </div>
            </div>

            
            <div className=" mb-8">
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Access to all premium tools</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Unlimited templates</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Priority support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Unlimited projects</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Cloud sync</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5">✓</span>
                <span className="text-[15.5px]">Advanced analytics</span>
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-block bg-white hover:bg-gray-300 text-violet-700 font-semibold text-lg py-7 rounded-2xl shadow-md transition-all">
              Start Pro Trial
            </button>

          </div>
        </div>

        
      </div>


      {/* Card 3 */}

      <div className="relative w-full max-w-md">
        
        
        {/* Main Card */}

        <div className="card shadow-2xl overflow-hidden h-full">
          <div className="card-body p-6 pb-8">
            
           
            <div className="mb-1">
              <h2 className="text-4xl font-bold tracking-tight">Enterprise</h2>
            </div>

            
            <p className="text-base-content/70 text-lg mb-1">
              For teams and businesses
            </p>

            {/* Price */}
            <div className="mb-2">
              <div className="flex items-baseline">
                <span className="text-3xl font-bold">$99</span>
                <span className="text-2xl font-medium text-base-content/70 ml-2">/Month</span>
              </div>
            </div>

            
            <div className=" mb-8 text-base-content/70">
              <div className="flex items-start gap-3 ">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Everything in Pro</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Team collaboration</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Custom integrations</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Dedicated support</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">SLA guarantee</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-xl mt-0.5 text-[#30B868]">✓</span>
                <span className="text-[15.5px]">Custom branding</span>
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-block bg-white hover:bg-gray-300 text-violet-700 font-semibold text-lg py-7 rounded-2xl shadow-md transition-all">
              Start Pro Trial
            </button>

          </div>
        </div>

        
      </div>

    </div>
  );
};

export default PricingCard;