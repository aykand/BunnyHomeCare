// src/App.tsx
import React, { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import WhatWeOffer from "../components/WhatWeOffer";
import Navbar from "../components/Navbar";

// ✅ CTA mesajı sadece ekran içerisinde olduğunda 5 saniye görünür
function SwipeCTA() {
  const [visible, setVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!inView) return;

    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, [inView]);

  if (!visible) return null;

  return (
    <div
      ref={ctaRef}
      className="absolute top-4 left-1/2 -translate-x-1/2 bg-black/60 text-white text-xl font-bold px-6 py-3 rounded-lg animate-bounce z-20"
    >
      ⬆ Swipe Up / Down ⬇
    </div>
  );
}

// ✅ Reviews listesi (örnek 20, 50’ye kadar eklenebilir)
const allReviews = [
  {
    name: "Ali Khalifa",
    avatar: "/avatars/ali.png",
    stars: 5,
    text: "We warmly welcome the distinguished and special service from Miss Nouhaila, who always provides service with a warm heart and more than wonderful treatment.",
    time: "3 months ago",
  },
  {
    name: "U Won",
    avatar: "/avatars/uwon.png",
    stars: 5,
    text: "Highly recommended! Miss Sabrina was above and beyond, very patient and helpful. She guided us in every step throughout the application process.",
    time: "1 year ago",
  },
  {
    name: "Farhana Ahmed",
    avatar: "/avatars/farhana.png",
    stars: 5,
    text: "Mrs. Sabrina and Anna performed an outstanding job. I am very happy with Bunny Home Care team.",
    time: "1 year ago",
  },
  {
    name: "Maria Lopez",
    avatar: "/avatars/user1.png",
    stars: 5,
    text: "They always answer my calls, explain everything in Spanish and treat me with respect. Great service!",
    time: "2 months ago",
  },
  {
    name: "John Smith",
    avatar: "/avatars/user2.png",
    stars: 5,
    text: "Very professional and kind staff. Payments are always on time and the process was simple.",
    time: "6 months ago",
  },
  {
    name: "Fatima Ali",
    avatar: "/avatars/user3.png",
    stars: 5,
    text: "Amazing service! They speak Arabic and understand my culture. I feel safe with Bunny Home Care.",
    time: "8 months ago",
  },
  {
    name: "David Johnson",
    avatar: "/avatars/user4.png",
    stars: 5,
    text: "Switching agencies was very easy, no lost hours. I should have done this sooner!",
    time: "5 months ago",
  },
  {
    name: "Sara Khan",
    avatar: "/avatars/user5.png",
    stars: 5,
    text: "Great team! They helped me care for my mother and explained everything clearly in Urdu.",
    time: "7 months ago",
  },
  {
    name: "Jean Dupont",
    avatar: "/avatars/user1.png",
    stars: 5,
    text: "Excellent service, they explained everything in French. Truly caring and supportive staff.",
    time: "4 months ago",
  },
  {
    name: "Raj Kumar",
    avatar: "/avatars/user2.png",
    stars: 5,
    text: "I am very happy with the service. They speak Hindi and guide me in every step with patience.",
    time: "9 months ago",
  },
  {
    name: "Anna Brown",
    avatar: "/avatars/user3.png",
    stars: 5,
    text: "Reliable payments, respectful team, and very easy to switch. Highly recommended!",
    time: "11 months ago",
  },
  {
    name: "Mohammed Saleh",
    avatar: "/avatars/user4.png",
    stars: 5,
    text: "Bunny Home Care is the best! They really care about their caregivers and clients.",
    time: "10 months ago",
  },
  {
    name: "Sophia Garcia",
    avatar: "/avatars/user5.png",
    stars: 5,
    text: "I always feel supported. The staff is kind and speaks my language. Thank you Bunny!",
    time: "3 weeks ago",
  },
  {
    name: "Timothy Miller",
    avatar: "/avatars/user1.png",
    stars: 5,
    text: "Great experience overall. The application process was smooth and transparent.",
    time: "1 month ago",
  },
  {
    name: "Aisha Noor",
    avatar: "/avatars/user2.png",
    stars: 5,
    text: "They helped me understand everything step by step. Very patient and caring team.",
    time: "2 months ago",
  },
  {
    name: "Carlos Fernandez",
    avatar: "/avatars/user3.png",
    stars: 5,
    text: "Very professional, payments are always on Fridays, and no delays at all!",
    time: "5 months ago",
  },
  {
    name: "Emily Davis",
    avatar: "/avatars/user4.png",
    stars: 5,
    text: "I am very satisfied. They explained everything clearly and treat me like family.",
    time: "7 months ago",
  },
  {
    name: "Hasan Rahman",
    avatar: "/avatars/user5.png",
    stars: 5,
    text: "Great service in Bengali. They are always helpful and answer my questions quickly.",
    time: "8 months ago",
  },
  {
    name: "Michael Green",
    avatar: "/avatars/user1.png",
    stars: 5,
    text: "Easy switching process, no lost hours. Definitely recommend Bunny Home Care.",
    time: "6 months ago",
  },
  {
    name: "Olga Petrova",
    avatar: "/avatars/user2.png",
    stars: 5,
    text: "I am very happy with their service. They respect my culture and support me always.",
    time: "4 months ago",
  },
  // 👉 Buradan 50 review olacak şekilde doldurabilirsin
];

function Home() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const swiperRef = useRef<any>(null);

  // ✅ Languages
  const languages = [
    { lang: "English", agent: "John Doe", phone: "+1 267-000-1111" },
    { lang: "Español", agent: "Maria Lopez", phone: "+1 267-000-2222" },
    { lang: "Français", agent: "Jean Dupont", phone: "+1 267-000-3333" },
    { lang: "Türkçe", agent: "Ahmet Yılmaz", phone: "+1 267-000-4444" },
    { lang: "हिन्दी", agent: "Raj Kumar", phone: "+1 267-000-5555" },
    { lang: "العربية", agent: "Fatima Ali", phone: "+1 267-000-6666" },
    { lang: "বাংলা", agent: "Hasan Rahman", phone: "+1 267-000-7777" },
    { lang: "اردو", agent: "Ayesha Khan", phone: "+1 267-000-8888" },
    { lang: "Shqip", agent: "Arben Gashi", phone: "+1 267-000-9999" },
  ];

  // ✅ Services
  const caregiverServices = [
    {
      title: "Bathing",
      description: "Helping with safe and dignified bathing routines.",
      img: "/images/bathing.png",
    },
    {
      title: "Dressing",
      description: "Assistance with clothing choices and dressing comfortably.",
      img: "/images/dressing.png",
    },
    {
      title: "Light Housekeeping",
      description: "Keeping the home safe and tidy with light chores.",
      img: "/images/housekeeping.png",
    },
    {
      title: "Laundry",
      description: "Assistance with washing, drying, and folding clothes.",
      img: "/images/laundry.png",
    },
    {
      title: "Meal Preparation",
      description: "Preparing nutritious meals and assisting with feeding.",
      img: "/images/meal.png",
    },
    {
      title: "Companionship",
      description: "Providing friendly and supportive interaction.",
      img: "/images/companionship.png",
    },
    {
      title: "Grocery",
      description: "Providing friendly and supportive interaction.",
      img: "/images/grocery.png",
    },
    {
      title: "Socializing",
      description: "Providing friendly and supportive interaction.",
      img: "/images/social.png",
    },
    {
      title: "Mobility Assistance",
      description: "Providing friendly and supportive interaction.",
      img: "/images/mobility.png",
    },
  ];

  return (
    <div className="font-sans text-gray-800 text-center">
      {/* HERO */}
      <section className="bg-gray-50 min-h-[75vh] flex items-center pt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              You Deserve Better Care
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Earn{" "}
              <span className="font-semibold text-primary">
                $10.000 more in 5 years
              </span>
              , with the best rate in the area.*
            </p>
            {/* Footnote */}
            <p className="mt-2 text-xs text-left text-slate-500 italic">
              *Results may vary by case.
            </p>
            {/* Buttons row */}
            <div className="flex items-center gap-4 mt-3 md:mt-4">
              <a
                href="#switch"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Switch Now
              </a>
              <a
                href="#offer"
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Your Offer
              </a>
            </div>
            {/* Stats Row under buttons */}
            <div className="mt-8 flex flex-col items-center gap-8 md:flex-row md:justify-start">
              {/* +20 Years Experience */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <span className="text-2xl font-bold text-gray-900">+20</span>
                <span className="text-gray-600 text-sm">
                  Years of Combined Experience
                </span>
              </div>

              {/* Google Rating */}
              <a
                href="https://share.google/7TGMFrT77hWjpaoti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center md:items-start text-center md:text-left"
              >
                <div className="flex items-center gap-2">
                  <img
                    src="/logos/Google_logo.png"
                    alt="Google"
                    className="h-6"
                  />
                  <span className="text-lg font-bold text-gray-900">5.0</span>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
                <span className="text-sm text-gray-600">Customer Reviews</span>
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <img
              src="/images/bhc_hero.png"
              alt="Happy seniors with Bunny mascot"
              className="rounded-xl shadow-xl w-[550px] md:w-[650px] transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>
      {/* ABOUT US */}
<section
  id="about"
  className="py-16 px-6 bg-blue-50"
  style={{ backgroundColor: "#eff6ff" }}
>
  <div className="container mx-auto flex flex-col md:flex-row items-center">
    {/* Text Section */}
    <div className="md:w-1/2 md:pr-12 text-center md:text-left">
      {/* 💻 Masaüstü versiyonu */}
      <div className="hidden md:block">
        <h2 className="text-3xl font-bold mb-6">About Us</h2>
        <p className="text-lg leading-relaxed text-gray-700 mb-4">
          With +20 years of combined experience and caring multicultural
          professionals, Bunny Home Care is a BBB A+ Certified Trusted Company
          focused on 5★ customer service in your language.
        </p>
        <p className="text-lg leading-relaxed text-gray-700">
          We hire family members or friends to take care of their seniors and
          they get paid for their help, or we find the best fit for their
          companionship and support on their daily basis activities.
        </p>
      </div>

      {/* Mobile About Us - Glassmorphism */}
<div className="md:hidden">
  <div className="rounded-2xl bg-white/30 backdrop-blur-lg border border-white/50 shadow-md">
    <button
      type="button"
      className="w-full flex justify-between items-center p-4 text-gray-900 font-semibold text-lg"
      onClick={() => {
        const c = document.getElementById("about2");
        const a = document.getElementById("arrow2");
        c?.classList.toggle("hidden");
        a?.classList.toggle("rotate-180");
      }}
    >
      <span>About Us</span>
      <span
        id="arrow2"
        className="text-xl text-[#30d5c8] transform transition-transform duration-300"
      >
        ▼
      </span>
    </button>

    <div
      id="about2"
      className="hidden p-5 text-gray-700 text-base leading-relaxed bg-white/70 backdrop-blur-sm rounded-b-2xl"
    >
      <p className="mb-3">
        With +20 years of combined experience and caring multicultural
        professionals, Bunny Home Care is a BBB A+ Certified Trusted
        Company focused on 5★ customer service in your language.
      </p>
      <p>
        We hire family members or friends to take care of their seniors
        and they get paid for their help, or we find the best fit for
        their companionship and support on their daily activities.
      </p>
    </div>
  </div>
</div>

    </div>

    {/* Image Section */}
    <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
      <img
        src="/images/bunny-flag.png"
        alt="Bunny Mascot"
        className="max-w-sm w-full transition-transform duration-300 hover:scale-105"
      />
    </div>
  </div>
</section>


      {/* TESTIMONIALS */}
      <section className="px-6 py-16 bg-white" id="reviews">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Testimonials & Reviews
        </h2>

        {/* Reviews List */}
        <div className="max-w-3xl mx-auto space-y-8">
          {allReviews.slice(0, visibleCount).map((review, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-left transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:transform hover:scale-[1.02]"
            >
              {/* Üst kısım */}
              <div className="flex items-center mb-3">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{review.name}</h3>
                  <p className="text-xs text-gray-500">{review.time}</p>
                </div>
                <img
                  src="/images/g_google.png"
                  alt="Google Logo"
                  className="ml-auto w-6 h-6"
                />
              </div>

              {/* Stars */}
              <div className="flex text-yellow-400 mb-2">
                {Array.from({ length: review.stars }).map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                  >
                    <path d="M12 .587l3.668 7.568L24 9.748l-6 5.854 1.417 8.263L12 19.896 4.583 23.865 6 15.602 0 9.748l8.332-1.593z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* See More */}
        {visibleCount < allReviews.length ? (
          <div className="text-center mt-8 mb-16">
            <button
              onClick={() => setVisibleCount((prev) => prev + 10)}
              className="inline-block bg-[#30d5c8] text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
            >
              See More Reviews
            </button>
          </div>
        ) : (
          // ✅ Tüm yorumlar açıldığında da boşluk bırak
          <div className="mt-8 mb-16"></div>
        )}

        {/* TikTok Style Video Slider */}
        <div className="mx-auto w-full flex justify-center">
          <div className="relative w-full max-w-[400px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
            <Swiper
              modules={[Navigation, Pagination, Mousewheel]}
              direction="vertical"
              slidesPerView={1}
              mousewheel
              pagination={{ clickable: true }}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={(swiper) => {
                const videos =
                  document.querySelectorAll<HTMLVideoElement>("video");
                videos.forEach((video, i) => {
                  if (i !== swiper.activeIndex) {
                    video.pause();
                    video.currentTime = 0;
                  }
                });
              }}
              className="h-full w-full"
            >
              {[
                { src: "/videos/shareen.mp4", name: "Shareen C." },
                { src: "/videos/gulbahar.mp4", name: "Gulbahar O." },
                { src: "/videos/nuhash.mp4", name: "Nuash M." },
                { src: "/videos/timothy.mp4", name: "Timothy M." },
                { src: "/videos/azer.mp4", name: "Azer G." },
              ].map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center bg-black"
                >
                  <div className="relative w-full h-full">
                    <video
                      src={video.src}
                      controls
                      playsInline
                      className="h-full w-full object-cover"
                    />
                    <p className="absolute bottom-14 left-4 text-white font-semibold bg-black/50 px-3 py-1 rounded-lg">
                      {video.name}
                    </p>
                    {index === 0 && <SwipeCTA />}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
            >
              ↑
            </button>
            <button
              onClick={() => swiperRef.current?.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 z-20 bg-black/50 text-white px-3 py-2 rounded-full hover:bg-black/70 transition-all duration-300 transform hover:scale-110"
            >
              ↓
            </button>
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <WhatWeOffer />

      {/* SWITCHING */}
      <section className="px-6 py-20 bg-white" id="switching">
{/* Başlık */}
<h2 className="text-4xl font-extrabold text-center mb-4">Switching</h2>
<p className="text-center text-xl text-gray-700 mb-14">
  Spoiler alert! No reapply, no lost hours, no gaps.
</p>

{/* Bunny + Chat Görseli */}
<div className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-12 mb-24 md:mb-32 flex-nowrap">
  {/* Bunny */}
  <div className="flex-shrink-0">
    <img
      src="/images/Bunny_question.png"
      alt="Do these sound familiar?"
      className="w-[130px] sm:w-[180px] md:w-[220px] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>

  {/* Chat */}
  <div className="flex-shrink-0">
    <img
      src="/images/chat_bubbles.png"
      alt="Complaints"
      className="w-[180px] sm:w-[260px] md:w-[340px] object-contain transition-transform duration-300 hover:scale-105"
    />
  </div>
</div>


        {/* Alt başlık */}
        <h3 className="text-3xl font-semibold text-center mb-10">
          How does Bunny Home Care do it?
        </h3>
        <h4 className="text-lg text-gray-600 font-medium mb-8">
          It’s not magic, but hard work on our customer service:
        </h4>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {[
            {
              title: "Get Paid Every Friday",
              text: "Reliable weekly payments on time, every week.",
              img: "/images/friday.png",
            },
            {
              title: "Best Rates",
              text: "The highest pay rates in Pennsylvania.",
              img: "/images/best_rate.png",
            },
            {
              title: "No Lost Hours",
              text: "Keep every hour you’ve worked without gaps.",
              img: "/images/hha.png",
            },
            {
              title: "We Speak Your Language",
              text: "Support and service in 15+ languages.",
              img: "/images/wsyl.png",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Title + Text üstte */}
              <h3 className="text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {item.text}
              </p>

              {/* Görsel altta */}
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl shadow transition-all duration-300 group-hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="px-8 py-16 bg-blue-50" id="languages">
        <h2 className="text-2xl font-bold text-center mb-6">
          We Speak Your Language
        </h2>
        <p className="mb-10 text-center max-w-2xl mx-auto">
          Our dedicated team speaks +15 languages and knows your culture, so
          that you can express yourself comfortably.
        </p>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-8">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".custom-next",
              prevEl: ".custom-prev",
            }}
            loop
            centeredSlides={true}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 }, // ✅ mobil boşluk açıldı
              640: { slidesPerView: 3, spaceBetween: 20 }, // ✅ tablet
              1024: { slidesPerView: 5, spaceBetween: 30 }, // ✅ desktop
            }}
            className="mx-auto"
          >
            {languages.map((lang, index) => (
              <SwiperSlide key={index}>
                <div
                  className="relative w-full h-28 cursor-pointer perspective mx-auto transition-transform duration-300 hover:scale-105"
                  onClick={() =>
                    setFlippedIndex(flippedIndex === index ? null : index)
                  }
                >
                  <div
                    className={`transition-transform duration-500 transform preserve-3d ${
                      flippedIndex === index ? "rotate-y-180" : ""
                    } relative w-full h-full`}
                  >
                    {/* Ön yüz */}
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg shadow-lg text-white font-bold text-lg backface-hidden bg-gradient-to-r from-teal-400 to-blue-500">
                      {lang.lang}
                    </div>

                    {/* Arka yüz */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-800 rounded-lg shadow-lg rotate-y-180 backface-hidden p-3">
                      <p className="font-bold">{lang.agent}</p>
                      <a
                        href={`tel:${lang.phone}`}
                        className="text-[#30d5c8] font-medium underline mt-1"
                      >
                        {lang.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 text-[#30d5c8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 text-[#30d5c8]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 md:h-10 md:w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </section>

      {/* TRUST */}
      <section className="px-8 py-16" id="trust">
        <h2 className="text-2xl font-bold mb-6">Trust & Accreditations</h2>
        <p className="mb-6 max-w-3xl mx-auto">
          Licensed by the Pennsylvania Department of Health, A+ Accredited by
          BBB, and partnered with major health organizations.
        </p>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={3}
          loop
          autoplay={{ delay: 2000 }}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="max-w-6xl mx-auto"
        >
          <SwiperSlide>
            <img src="/logos/bbb.png" alt="BBB" className="h-16 mx-auto" />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logos/amerihealth.webp"
              alt="AmeriHealth"
              className="h-16 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logos/keystone.webp"
              alt="Keystone"
              className="h-16 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logos/pahealth.webp"
              alt="PA Health"
              className="h-16 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/logos/padepartment.webp"
              alt="PA DOH"
              className="h-16 mx-auto"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/logos/upmc.webp" alt="UPMC" className="h-16 mx-auto" />
          </SwiperSlide>
        </Swiper>
      </section>

      

      {/* SUBSCRIBE / CAREGIVER FORM */}
      <section className="bg-white py-16" id="subscribe">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Başlık */}
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Become a Caregiver with Bunny Home Care
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will reach out to you with next
            steps.
          </p>

          {/* Form */}
          <form className="bg-gray-50 shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Full Name */}
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
            />

            {/* Phone */}
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
            />

            {/* Zip Code */}
            <input
              type="text"
              placeholder="Zip Code"
              className="px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
            />

            {/* Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
              >
                Subscribe Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* CAREGIVER’S ROLE */}
      <section className="px-8 py-16 bg-white" id="services">
        <h2 className="text-3xl font-bold text-center mb-10">
          Caregiver's Role
        </h2>

        {/* Desktop Grid (GÜNCELLENDİ: Tüm 6 hizmeti göstermek için artık döngü kullanıyor) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {caregiverServices.map((service, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg group"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 p-6 flex flex-col justify-end text-left">
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-100 mb-4 text-sm">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Slider (Zaten tüm 6 hizmeti gösteriyor ve opacity ayarı yapılmıştı) */}
        <div className="md:hidden max-w-md mx-auto">
          <Swiper
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className="pb-10"
          >
            {caregiverServices.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative rounded-xl overflow-hidden shadow-xl">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-80 object-cover"
                  />
                  {/* Opacity: bg-opacity-40 */}
                  <div className="absolute inset-0 bg-black bg-opacity-30 p-6 flex flex-col justify-end text-left">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-100 mb-4 text-base">
                      {service.description}
                    </p>
                    <a
                      href="#contact"
                      className="text-white font-semibold hover:underline text-sm"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900">
            Contact Us
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {/* Form */}
            <div>
              <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                <form className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:outline-none transition-all duration-300 hover:border-primary/50"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-teal-500 transition-all duration-300 transform hover:scale-105"
                  >
                    Send
                  </button>
                </form>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <h3 className="text-lg font-semibold mt-3 md:mt-4">
                  Contact Info
                </h3>
                <a
                  href="tel:+12674839642"
                  className="block text-primary mb-2 hover:underline transition-all duration-300 hover:text-teal-600 transform hover:scale-105"
                >
                  📞 +1 267-483-9642
                </a>
                <a
                  href="mailto:info@bunnyhomecare.com"
                  className="block text-primary hover:underline transition-all duration-300 hover:text-teal-600 transform hover:scale-105"
                >
                  📧 help@bunnyhomecare.com
                </a>
              </div>
            </div>
            {/* Counties */}
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Counties We Serve
              </h3>
              <div className="grid grid-cols-2 gap-2 text-center">
                <span>Berks</span>
                <span>Bucks</span>
                <span>Carbon</span>
                <span>Chester</span>
                <span>Dauphin</span>
                <span>Delaware</span>
                <span>Lancaster</span>
                <span>Lebanon</span>
                <span>Lehigh</span>
                <span>Luzerne</span>
                <span>Monroe</span>
                <span>Montgomery</span>
                <span>Northampton</span>
                <span>Philadelphia</span>
                <span>Schuylkill</span>
                <span>York</span>
              </div>
            </div>
            {/* Maps */}
<div className="space-y-6">
  {/* Greater Philadelphia */}
  <div>
    <h4 className="font-semibold mb-2 text-center">
      Greater Philadelphia
    </h4>
    <iframe
      src="https://www.google.com/maps?q=Bunny+Home+Care,+1000+NORTHBROOK+DR,+STE+124,+Feasterville+Trevose,+PA+19053&output=embed"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Allentown */}
  <div>
    <h4 className="font-semibold mb-2 text-center">Allentown</h4>
    <iframe
      src="https://www.google.com/maps?q=Bunny+Home+Care,+4905+Tilghman+St+%23300,+Allentown,+PA+18104&output=embed"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>

  {/* Lancaster */}
  <div>
    <h4 className="font-semibold mb-2 text-center">Lancaster</h4>
    <iframe
      src="https://www.google.com/maps?q=Bunny+Home+Care,+Lancaster,+PA&output=embed"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>

          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
