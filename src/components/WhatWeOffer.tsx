import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HubspotForm from "react-hubspot-form"; // Buraya eklendi

const offers = [
  {
    title: "Best Rate",
    description: "Highest Hourly Rate in Area.",
    img: "/images/best_rate.png",
  },
  {
    title: "Easy Switching",
    description: "Fast, Easy, and Your Service Won’t Stop.",
    img: "/images/easy_switching.png",
  },
  {
    title: "5★ Customer Service",
    description: "At Bunny Home Care, We Speak Your Language and Share Your Culture",
    img: "/images/customer_service.png",
  },
  {
    title: "Trust",
    description: "BBB A+ Accredited, Licensed in PA.",
    img: "/images/trust.png",
  },
  {
    title: "Health Insurance",
    description: (
      <>
        Medical, Dental, Vision & RX. <br />
        <a
          href="https://home.bunnyhomecare.com/health-plan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline transition-colors"
        >
          Learn more
        </a>
      </>
    ),
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

      <div className="mt-20 max-w-3xl mx-auto text-center px-4 sm:px-6">
        <p className="text-gray-700 text-lg mb-6">
          Contact one of our Team Representatives.
        </p>

        {/* --- DÜZELTME: Beyaz kart ve gölge kaldırıldı --- */}
        <div className="mx-auto w-full max-w-[700px]">
          <HubspotForm
            portalId="44032932"
            formId="192b5f4b-65e7-4b1e-bde1-96a320cfad06"
            region="na1"
            loading={
              <div className="text-gray-500 text-lg">Loading form...</div>
            }
            onSubmit={() => console.log("✅ What We Offer form submitted!")}
          />
        </div>
        {/* --- DÜZELTME SONU --- */}
      </div>
    </section>
  );
}