import React from 'react';

const StatsSection = () => {
  return (
    // পুরো সেকশনটা একটা ডিভ
    <div className="pt-12 pb-3 px-4"
  style={{ background: 'linear-gradient(to right, #4F39F6, #9514FA)' }}>
      
      {/* মাঝখানে রাখার জন্য কন্টেইনার */}
      <div className="max-w-5xl mx-auto">
        
        {/* তিনটা কার্ড পাশাপাশি থাকবে */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* প্রথম কার্ড - 50K+ */}
          <div className="text-center w-full md:w-1/3">
            <div className="text-5xl font-bold text-white  mb-2">
              50K+
            </div>
            <div className="text-white  font-medium">
              Active Users
            </div>
            
          </div>

          <div className="hidden md:block text-gray-300 text-7xl font-light">
            |
          </div>
          
          {/* দ্বিতীয় কার্ড - 200+ */}
          <div className="text-center w-full md:w-1/3">
            <div className="text-5xl font-bold text-white  mb-2">
              200+
            </div>
            <div className="text-white font-medium">
              Premium Tools
            </div>
            
          </div>

          <div className="hidden md:block text-gray-300 text-7xl font-light">
            |
          </div>
          
          {/* তৃতীয় কার্ড - 4.9 */}
          <div className="text-center w-full md:w-1/3">
            <div className="text-5xl font-bold text-white mb-2">
              4.9
            </div>
            <div className="text-white  font-medium">
              Rating
            </div>
            
          </div>
          
        </div>
        
        
        {/* নিচে একটা ছোট লাইন */}
        <div className="text-center text-gray-300 text-sm mt-6">
  🌟 More than 50K active users joined us
</div>
        
      </div>
    </div>
  );
};

export default StatsSection;