import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const offers = [
  {
    title: "Best Rate",
    description: "Highest Hourly Rate in Area.",
    img: "/images/best_rate.png",
  },
  {
    title: "Easy Switching",
    description: "No Lost Hours, No Gaps.",
    img: "/images/easy_switching.png",
  },
  {
    title: "5★ Customer Service",
    description: "We Speak Your Language.",
    img: "/images/customer_service.png",
  },
  {
    title: "Trust",
    description: "BBB A+ Accredited, Licensed in PA.",
    img: "/images/trust.png",
  },
  {
    title: "Health Insurance",
    description: "Medical, Dental, Vision & RX.",
    img: "/images/health_insurance.png",
  },
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0); // Desktop tabs

  return (
    <section className="bg-gray-50 py-16" id="benefits">
      <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

      {/* ✅ Masaüstü: Tablar */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* Tab Buttons */}
        <div className="flex justify-center space-x-10 border-b mb-10">
          {offers.map((offer, i) => (
            <button
              key={i}
              className={`pb-3 px-2 text-lg font-medium transition-colors ${
                activeIndex === i
                  ? "border-b-4 border-blue-600 text-blue-600"
                  : "text-gray-600 hover:text-blue-600"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {offer.title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10">
          <img
            src={offers[activeIndex].img}
            alt={offers[activeIndex].title}
            className="w-[300px] h-[200px] object-cover rounded-xl shadow"
          />
          <div className="max-w-md text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3">
              {offers[activeIndex].title}
            </h3>
            <p className="text-gray-600 text-lg">
              {offers[activeIndex].description}
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Mobil: Slider */}
      <div className="block md:hidden max-w-md mx-auto">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
          className="pb-10"
        >
          {offers.map((offer, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white rounded-lg shadow p-4 flex flex-col items-center">
                <img
                  src={offer.img}
                  alt={offer.title}
                  className="w-[300px] h-[200px] object-cover rounded-xl mb-4"
                />
                <h3 className="text-lg font-bold mb-2">{offer.title}</h3>
                <p className="text-gray-600 text-center">{offer.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
       {/* Form */}
<form className="mt-10 bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-lg mx-auto">
  {/* Full Name */}
  <input
    type="text"
    placeholder="Full Name"
    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
  />

  {/* Phone */}
  <input
    type="tel"
    placeholder="Phone Number"
    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
  />

  {/* Zip Code */}
  <input
    type="text"
    placeholder="Zip Code"
    className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none text-sm"
  />

  {/* Button */}
  <div className="md:col-span-3">
    <button
      type="submit"
      className="w-full bg-primary text-white py-2 rounded-lg font-semibold text-sm hover:bg-teal-500 transition-colors"
    >
      Get Call From Us
    </button>
  </div>
</form>
    </section>
  );
}
