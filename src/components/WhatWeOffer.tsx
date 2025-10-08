import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 🔹 HubSpot global tip tanımı (TS için güvenli)
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: any) => void;
      };
    };
  }
}

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
  const [formLoaded, setFormLoaded] = useState(false);

  // ✅ HubSpot formu yükle
  useEffect(() => {
    // Script zaten varsa tekrar ekleme
    if (
      document.querySelector(
        'script[src="https://js.hsforms.net/forms/embed/44032932.js"]'
      )
    ) {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "44032932",
          formId: "b20f10f2-517b-4833-a8fb-7bf6ac8f46bd",
          target: "#hubspot-form",
          onFormReady: () => setFormLoaded(true),
        });
      }
      return;
    }

    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/embed/44032932.js";
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      // @ts-ignore
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "44032932",
          formId: "b20f10f2-517b-4833-a8fb-7bf6ac8f46bd",
          target: "#hubspot-form",
          onFormReady: () => setFormLoaded(true),
        });
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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

      {/* ✅ HubSpot Form (shadow + rounded + animasyonlu fade-in) */}
      <div
        className={`mt-10 bg-white shadow-md rounded-xl p-6 max-w-lg mx-auto transition-opacity duration-700 ${
          formLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div id="hubspot-form"></div>
      </div>
    </section>
  );
}
