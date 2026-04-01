import React from 'react';

const GetStartedSteps = () => {
  return (
    <div className='bg-base-200 mt-18 md:mt-16'>
      <div className='px-4 py-8 md:py-12 max-w-4xl mx-auto text-center'>

        <h3 className='font-extrabold text-3xl sm:text-4xl md:text-5xl'>
          Get Started in 3 Steps
        </h3>

        <p className='text-lg sm:text-xl md:text-2xl mt-3 text-gray-600'>
          Start using premium digital tools in minutes, not hours.
        </p>

      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6  p-8 max-w-7xl mx-auto items-center">



        {/* Main Card */}
        <div className="card  max-w-md bg-base-100 shadow-xl">
          <div className="transition duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl card-body items-center text-center">


            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                01
              </div>
            </div>

            <div>
              <img className='bg-purple-200 p-4 rounded-full' src="/user.png" alt="" />
            </div>


            <h1 className="text-3xl font-bold text-base-content mb-2">
              Create Account
            </h1>


            <p className="text-base-content/70 text-[15px] leading-relaxed max-w-[260px]">
              Sign up for free in seconds. No credit card<br />
              required to get started.
            </p>


            <div className="w-full mt-10">

            </div>
          </div>
        </div>



        {/* 2nd==== */}


        <div className=" card w-full max-w-md bg-base-100 shadow-xl">
          <div className="transition duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl card-body items-center text-center">


            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                02
              </div>
            </div>

            <div>
              <img className='bg-purple-200 p-4 rounded-full' src="/package.png" alt="" />
            </div>


            <h1 className="text-3xl font-bold text-base-content mb-2">
              Choose Products
            </h1>


            <p className="text-base-content/70 text-[15px] leading-relaxed max-w-[260px]">
              Browse our catalog and select the tools <br /> that fit your needs.
            </p>


            <div className="w-full mt-10">

            </div>
          </div>
        </div>

        {/* 3rd==== */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl">
          <div className="transition duration-300 transform hover:-translate-y-2 hover:scale-105 shadow-md hover:shadow-xl card-body items-center text-center ">


            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 bg-violet-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                03
              </div>
            </div>

            <div>
              <img className='bg-purple-200 p-4 rounded-full' src="/rocket.png" alt="" />
            </div>


            <h1 className="text-3xl font-bold text-base-content mb-2">
              Start Creating
            </h1>


            <p className="text-base-content/70 text-[15px] leading-relaxed max-w-[260px]">
              Download and start using your premium <br /> tools immediately.
            </p>


            <div className="w-full mt-10">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStartedSteps;