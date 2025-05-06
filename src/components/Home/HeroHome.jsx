import React from 'react';

const HeroHome = () => {
  return (
    <div className="hero min-h-screen w-[95vw] mb-15 mx-auto rounded-lg bg-gradient-to-br from-blue-900 via-blue-600 to-blue-300">
      <div className="hero-content flex-col lg:flex-row-reverse justify-around w-full">
        <img
          src="https://www.appsflyer.com/wp-content/uploads/2021/03/web-to-app-banners-square.jpg"
          className="max-w-sm rounded-lg shadow-2xl w-full"
        />
        <div>
          <h1 className="text-5xl font-bold">The Best App Store you can find!</h1>
          <p className="py-6">
            Providing you with top quality apps since 2020. Choose us over Google, Apple anytime <br /> Cencorship? We dont do that here, We value customer availabiltiy over anything.
          </p>
          <button className="btn bg-blue-600">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default HeroHome;