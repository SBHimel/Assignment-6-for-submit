import React from 'react';

const Premium = () => {
    return (
        <div>
            
            <div className=" py-8">
                <div className="max-w-7xl mx-auto px-6 text-center">

                    {/* Small Badge */}
                    <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-sm font-medium px-5 py-2 rounded-full mb-6">
                        <span>✦</span>
                        Premium Collection
                    </div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tighter mb-6">
                        Premium Digital Tools
                    </h1>

                    {/* Subtitle */}
                    <p className="max-w-2xl mx-auto text-xl text-gray-600 leading-relaxed">
                        Choose from our curated selection of premium digital products designed
                        to boost your productivity and creativity.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Premium;