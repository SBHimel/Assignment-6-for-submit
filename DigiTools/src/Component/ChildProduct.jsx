import React, { useState } from 'react';
import { toast } from 'react-toastify';




const ChildProduct = ({ card, carts, setCarts }) => {

    const [isBuyNow, setIsBuyNow] = useState(true);

    const handleChange = () => {
        setIsBuyNow(false)

        const isFound = carts.find(item => item.id === card.id)
        // console.log(isFound)
        if (isFound) {
            toast.error("Item already in cart!")
            return
        }

        setCarts([...carts, card])

        toast.success("Item added to cart!")
    }

    return (
        <div>
            <div>
                <div className="max-w-[340px] mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">

                    {/* Best Seller Badge - Exact Top Right */}
                    <div className="absolute top-5 right-5 z-10">
                        <div className={` text-[#1F2937] text-xs font-semibold px-4 py-1.5 rounded-xl shadow-md flex items-center gap-1

                                     ${card.tag === "Best Seller" ? "bg-red-500 text-white"
                                : card.tag === "Popular" ? "bg-purple-500 text-white"
                                    : card.tag === "New" ? "bg-green-500 text-white"
                                        : "bg-gray-300 text-black"}
                                        `}>
                            ⭐ {card.tag}
                        </div>
                    </div>

                    {/* Icon Section */}
                    <div className="pt-10 p-6 ">
                        <div className="w-20 h-20 bg-yellow-100 rounded-2xl flex items-center justify-center text-5xl shadow-inner">
                            {card.icon}
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="px-2  ">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                            {card.name}
                        </h2>

                        <p className="text-gray-600 text-[15px] leading-relaxed mb-3">
                            {card.description}
                        </p>

                        {/* Price */}
                        <div className="mb-3">
                            <span className="text-5xl font-bold text-gray-900">${card.price}</span>
                            <span className="text-gray-500 text-xl font-medium">/{card.period}</span>
                        </div>

                        {/* Features */}
                        <div className="space-y-2 mb-10 text-left">
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-base font-bold">✓</div>
                                <span className="text-gray-700 text-[15px]">{card.featuresOne}</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-base font-bold">✓</div>
                                <span className="text-gray-700 text-[15px]">{card.featuresTwo}</span>
                            </div>

                            
                            <div className="flex items-start gap-3">
                                <div className="mt-0.5 w-5 h-5 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-base font-bold">✓</div>
                                <span className="text-gray-700 text-[15px]">{card.featuresThree}</span>
                            </div>
                        </div>

                        {/* Buy Now Button */}
                        <button
                            onClick={handleChange}
                            className={`w-full text-white font-semibold text-lg py-3 rounded-4xl shadow-lg active:scale-[0.97] transition-all ${isBuyNow
                                    ? "bg-purple-600 hover:bg-purple-700"   // Buy Now state
                                    : "bg-green-500 hover:bg-green-600"     // Added to Cart state
                                }`}
                        >
                            {isBuyNow ? "Buy Now" : "Added to Cart"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChildProduct;