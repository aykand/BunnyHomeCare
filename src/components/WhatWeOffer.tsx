import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import HubspotForm from "react-hubspot-form"; // Buraya eklendi

const offers = [
  {
    title: "Caregivers Tailored Matching",
    description: "Bunny Home Care uses an AI-powered Client-Caregiver Matching System combined with human expertise to help connect each client with a caregiver who best fits their personal care needs, language preferences, cultural background, and daily living assistance requirements.",
    img: "/images/tailored_mathing_bhc.webp",
  },
  {
    title: "Easy Switching",
    description: "Switching means upgrading your care when your current agency isn't meeting your expectations. We handle the entire process for you, making the transition fast, seamless, and completely stress-free, ensuring your essential care services continue without interruption.",
    img: "/images/easy_switching_bhc.webp",
  },
  {
    title: "5★ Customer Service",
    description:
      "Families across Pennsylvania rate us with five-star reviews for our dedicated support. As a top-rated home care agency in PA, we match you with care professionals who share your language and culture. Experience the trusted service that brings true peace of mind to family caregivers.",
    img: "/images/customer_service.webp",
  },
  {
    title: "Trust",
    description: (
      <>
        {/* 'style' yerine 'className' ile alt boşluk verildi */}
        <p className="mb-4">
          As a trusted leader in the Pennsylvania home care sector, we are proud to hold an A+ accreditation from the Better Business Bureau (BBB). This distinction highlights our unwavering dedication to upholding the highest standards of professional integrity and regulatory compliance.
        </p>

        {/* Tailwind Sınıfları Eklendi:
            - text-center: Mobilde (varsayılan) ortalar.
            - md:text-left: "md" breakpoint'inden (768px+) sonra sola dayalı yapar.
          */}
        <div className="text-center md:text-left">
          <a
            href="https://www.bbb.org/us/pa/feasterville-trevose/profile/home-health-care/bunny-home-care-llc-0241-236076009/#sealclick"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            {/* 'style' yerine 'className' ile logo boyutları ve kenarlık ayarlandı */}
            <img
              src="https://seal-dc-easternpa.bbb.org/seals/blue-seal-187-130-bbb-236076009.png"
              className="border-0 w-[100px] h-auto"
              alt="Bunny Home Care LLC BBB Business Review"
            />
          </a>
        </div>
      </>
    ),
    img: "/images/trust.webp",
  },
  {
    title: "Health Insurance",
    description: (
      <>
        <p className="mb-3">
          We value your dedication. That's why we support our Pennsylvania caregivers with essential health perks to help cover their everyday needs:
        </p>
        <ul className="list-disc pl-5 mb-4 space-y-1">
          <li>
            <strong>Medical:</strong> Accessible health plans for you and your family.
          </li>
          <li>
            <strong>Dental & Vision:</strong> Smart coverage for routine and preventative care.
          </li>
          <li>
            <strong>Prescription (RX):</strong> Affordable access to the medications you need.
          </li>
        </ul>
        <a
          href="https://home.bunnyhomecare.com/health-plan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary font-medium hover:underline transition-colors inline-block mt-2"
          // SEO İyileştirmesi: Linkin nereye gittiğini açıkça belirten metin kullanıldı.
          // İsterseniz 'aria-label' da ekleyerek erişilebilirliği daha da artırabilirsiniz.
          aria-label="Learn more about Bunny Home Care Health Plan"
        >
          View Health Plan Details
        </a>
      </>
    ),
    img: "/images/health_insurance.webp",
}
];

export default function WhatWeOffer() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-gray-50 py-16" id="benefits">
      <h2 className="text-3xl font-bold text-center text-[#37575f] mb-12">
        What We Offer
      </h2>

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
                  : "text-[#37575f] hover:text-primary"
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
            <h3 className="text-2xl font-bold mb-3 text-[#37575f]">
              {offers[activeIndex].title}
            </h3>
            {/* HATA DÜZELTMESİ (1/2): <p> <div> olarak değiştirildi */}
            <div className="text-[#37575f] text-lg">
              {offers[activeIndex].description}
            </div>
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
                {/* HATA DÜZELTMESİ (2/2): <p> <div> olarak değiştirildi */}
                <div className="text-gray-600 text-center">
                  {offer.description}
                </div>
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