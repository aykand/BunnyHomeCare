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
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16" id="benefits">
      <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>

      {/* ✅ Masaüstü: Tablı Görünüm */}
      <div className="hidden md:block max-w-6xl mx-auto">
        {/* Tab Başlıkları */}
        <div className="flex justify-center space-x-10 border-b mb-10">
          {offers.map((offer, i) => (
            <button
              key={i}
              className={`pb-3 px-2 text-lg font-medium transition-colors ${
                activeIndex === i
                  ? "border-b-4 border-primary text-primary"
                  : "text-gray-600 hover:text-primary"
              }`}
              onClick={() => setActiveIndex(i)}
            >
              {offer.title}
            </button>
          ))}
        </div>

        {/* Tab İçeriği */}
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
              <div className="bg-white rounded-xl shadow p-5 flex flex-col items-center">
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

     {/* ✅ Modern Form - What We Offer ile aynı stile sahip */}
          <div className="mt-20 max-w-3xl mx-auto text-center px-4 sm:px-6">
  <p className="text-gray-700 text-lg mb-6">
    Fill out the form below and our team will reach out to you with next steps.
  </p>

  <form className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
    {/* Full Name */}
    <input
      type="text"
      placeholder="Full Name"
      className="px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
    />

    {/* Phone */}
    <input
      type="tel"
      placeholder="Phone Number"
      className="px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
    />

    {/* Zip Code */}
    <input
      type="text"
      placeholder="Zip Code"
      className="px-5 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary/60 focus:border-primary/60 outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
    />

    {/* Button */}
    <div className="md:col-span-3">
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-[#30d5c8] to-[#2dd4bf] text-white py-3 rounded-lg font-semibold tracking-wide hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
      >
        Learn More
      </button>
    </div>
  </form>
</div>


    </section>
  );
}
