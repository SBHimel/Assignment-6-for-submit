import React from "react";

const CTASection = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-purple-700 py-20 text-center text-white">
      
      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold mb-4">
          Ready To Transform Your Workflow?
        </h1>

        {/* Subtext */}
        <p className="text-sm md:text-base text-white/80 mb-8">
          Join thousands of professionals who are already using DigiStock to work smarter.
          <br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-4 flex-wrap">
          <button className="btn bg-white text-purple-600 hover:bg-gray-100 border-none rounded-full px-6">
            Explore Products
          </button>

          <button className="btn btn-outline border-white text-white hover:bg-white hover:text-purple-600 rounded-full px-6">
            View Pricing
          </button>
        </div>

        {/* Footer text */}
        <p className="text-xs text-white/70">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CTASection;