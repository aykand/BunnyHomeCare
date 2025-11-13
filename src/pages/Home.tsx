// src/App.tsx
import React, { useEffect, useState, useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Mousewheel } from "swiper/modules";
import WhatWeOffer from "../components/WhatWeOffer";
import ReactPlayer from "react-player";
import HubspotForm from "react-hubspot-form";
import { useLocation } from "react-router-dom";


// ✅ CTA mesajı sadece ekran içerisinde olduğunda 5 saniye görünür
function SwipeCTA() {
  const [visible, setVisible] = useState(true);
  const [inView, setInView] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // DOM render sonrası güvenli kaydırma
    const t = window.setTimeout(() => {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 50);
    return () => window.clearTimeout(t);
  }, [hash]);


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

    const timer = setTimeout(() => setVisible(false), 4000);
    return () => clearTimeout(timer);
  }, [inView]);

  if (!visible) return null;

  return (
    <div
      ref={ctaRef}
      className="absolute top-4 left-[20%] -translate-x-1/2 bg-gray-600/50 text-white text-xl font-bold px-6 py-3 rounded-lg animate-bounce z-20"
    >
      ⬆ Swipe Up / Down ⬇
    </div>
  );
}

// ✅ Reviews listesi (örnek 20, 50’ye kadar eklenebilir)
const allReviews = [
  {
    name: "Babu Saganti",
    avatar: "/avatars/b.webp",
    stars: 5,
    text: "Best home care reliable. Great customer service. They support employees and clients. I recommend for every one.",
  },
  {
    name: "Raj Mittal",
    avatar: "/avatars/R.webp",
    stars: 5,
    text: "I am extremely satisfied with the services provided by Bunny Homecare. Their team is professional, caring, and truly dedicated to their clients’ well-being. The staff members are always punctual, attentive, and handle their responsibilities with compassion and respect. From the very beginning, communication was excellent and the management made sure all my needs were understood and met with care. It’s clear that Bunny Homecare takes great pride in offering reliable and high-quality service. I highly recommend Bunny Homecare Greater Philadelphia to anyone looking for dependable, professional, and compassionate home care support.",
  },
  {
    name: "N Shehzad",
    avatar: "/avatars/N Shehzad.webp",
    stars: 5,
    text: "I have been working there for last one year it's amazing and very friendly jobs I ever been there.",
  },
  {
    name: "Marta Torres",
    avatar: "/avatars/m.webp",
    stars: 5,
    text: "E podido experimentar grandes cambios, por los servicios que e recibido atraves de las ayudas y beneficios de bony hunter , muy en especial de la señorita Cristina que ha sido de gran ayuda para mi con la información brindada y la personalidad tan maravillosa al hablar conmigo… muchas gracias por su atención.",
  },
  {
    name: "Stephanie Brown",
    avatar: "/avatars/s.webp",
    stars: 5,
    text: "Great experience I loved Jerry he is the Best. He helped beyond expectations!",
  },
  {
    name: "Fārêśhtá Ãkbárÿ",
    avatar: "/avatars/f.webp",
    stars: 5,
    text: "They are wonderful I enjoy working with them thanks to Bunny Home Care.",
  },
  {
    name: "Dana Khatib",
    avatar: "/avatars/d.webp",
    stars: 5,
    text: "I am currently working with this company, and my experience has been — and continues to be — truly exceptional. I highly recommend it to anyone seeking reliable care services or a rewarding opportunity to work in this field. The company stands out for its professionalism and its genuine commitment to the well-being of both employees and clients. The team is extremely kind and supportive, always ready to assist with paperwork and processes, making everything smooth and hassle-free. They also regularly check in on both my situation and that of my client, which reflects their high level of care and dedication. From a financial perspective, their salaries are very good and align well with the nature of the work. In short, I truly believe this is the best company to work for or to turn to when seeking top-quality care services, and I wholeheartedly recommend it with full trust and confidence.",
  },
  {
    name: "Genesis Acosta",
    avatar: "/avatars/G.webp",
    stars: 5,
    text: "Excellent experience",
  },
  {
    name: "Kara Jackson",
    avatar: "/avatars/K.webp",
    stars: 5,
    text: "Excellent experience.",
  },
  {
    name: "Selvar Tawadros",
    avatar: "/avatars/Selvar Tawadros.webp",
    stars: 5,
    text: "The experience had some hiccups but Jerry was able to help clear everything up and was on top of every situation and handled it with care",
  },
  {
    name: "Colasia Blue",
    avatar: "/avatars/C.webp",
    stars: 5,
    text: "The best company you can have they are reliable dependable and very friendly. They call the check on you. Make sure you don't go day run a good service.",
  },
  {
    name: "Andreina Jerez",
    avatar: "/avatars/adreina.webp",
    stars: 5,
    text: "Yesenia is an excellent coordinator! She goes above and beyond to make sure everything runs smoothly. From the very beginning, she made us feel comfortable and confident in the care process. She’s always professional, attentive, and quick to respond to any questions or concerns.",
  },
  {
    name: "Cyrena Marie",
    avatar: "/avatars/C.webp",
    stars: 5,
    text: "Best place to work. I would recommend this company to anyone they call you. They check up on you. They check up on your Client. They get your paperwork done correctly. You won’t have no issues out of this company and their pay is good. I had bad experiences with a lot of companies and this one is the one to go to when I get the cards for this company. I will be passing them out. If you’re a caregiver or a client, they will have the best treatment. I’m blessed to come to this company. I’m not gonna change companies.",
  },
  {
    name: "Shadab Jacob",
    avatar: "/avatars/s.webp",
    stars: 5,
    text: "Working at Bunny Home Care has been a fulfilling experience. The management is supportive, the training is thorough, and the team is collaborative. They genuinely care about both clients and employees, creating a positive work environment.",
  },
  {
    name: "Timothy Miller",
    avatar: "/avatars/tarek.webp",
    stars: 5,
    text: "Bunny Home Care is great too work with and great experience with costumer service!",
  },
  {
    name: "Maria Lopez",
    avatar: "/avatars/m.webp",
    stars: 5,
    text: "They always answer my calls, explain everything in Spanish and treat me with respect. Great service!",
  },
  {
    name: "Aisha Noor",
    avatar: "/avatars/a.webp",
    stars: 5,
    text: "They helped me understand everything step by step. Very patient and caring team.",
  },
  {
    name: "Mohammed Kamal",
    avatar: "/avatars/Mohamammad Kamal.webp",
    stars: 5,
    text: "We warmly welcome the distinguished and special service from Miss Nouhaila, who always provides service with a warm heart and more than wonderful treatment.",
  },
  {
    name: "Eman Elfeky",
    avatar: "/avatars/E.webp",
    stars: 5,
    text: "It's very good I'm so happy to work with you 😍😍😍😍😍",
  },
  {
    name: "Tashawnna Sigmant",
    avatar: "/avatars/Tashawnna sigman.webp",
    stars: 5,
    text: "The person I met with was helpful and hired me she answered all my questions.",
  },
  {
    name: "Jaindra Lama",
    avatar: "/avatars/jaindra.webp",
    stars: 5,
    text: "Great people Great service",
  },
  {
    name: "Suzan Nagib",
    avatar: "/avatars/suzan nagib.webp",
    stars: 5,
    text: "Thanks for check on me",
  },
  {
    name: "Md Hannan",
    avatar: "/avatars/md hannan.webp",
    stars: 5,
    text: "They are a great agency.",
  },
  {
    name: "Jahed Sarwardi",
    avatar: "/avatars/Jahed sarwardi.webp",
    stars: 5,
    text: "Very good company.",
  },
  {
    name: "Shafeen Akhter",
    avatar: "/avatars/s.webp",
    stars: 5,
    text: "Bunny Home Care has been a great place to work with. I have never had any issues and they are very cooperative.",
  },
   {
    name: "Nurjahan Kamal",
    avatar: "/avatars/nurjahan.webp",
    stars: 5,
    text: "Bunny Home Care is one of the best in my opinion because the staff are very helpful , if I need anything they will help me immediately and they are always very friendly and they make sure that their employees are really well paid and I am very satisfied with their business , All in all this is the best Home Care in my opinion.",
  },
  {
    name: "Rajeshri Patel",
    avatar: "/avatars/R.webp",
    stars: 5,
    text: "Home care agency with an excellent service.",
  },
  {
    name: "Marwa Jawad",
    avatar: "/avatars/m.webp",
    stars: 5,
    text: "Amazing home care agency, they're so helpful, response quickly, and careful about clients. Highly recommended.",
  },
  {
    name: "Karoline Nader",
    avatar: "/avatars/karoline.webp",
    stars: 5,
    text: "Great company to work for, very helpful staff. I highly recommend it.",
  },
   {
    name: "Omer Khilwat",
    avatar: "/avatars/omer khilwat.webp",
    stars: 5,
    text: "I highly recommend Bunny Homecare for anyone seeking reliable and compassionate in-home care. 5 stars and a big thank you to their wonderful team!",
  },
  {
    name: "Daniel Hernandez",
    avatar: "/avatars/daniel hernandez.webp",
    stars: 5,
    text: "Bunny Home care was exceptional in assisting me to become a caregiver for my father who is recovering from lung cancer chemotherapy and radiation. I am grateful for their professionalism, understanding, training and support.",
  },
   {
    name: "Yessenia Pizarro",
    avatar: "/avatars/y.webp",
    stars: 5,
    text: "If you are looking for an agency I rate BUNNY a 5 star. Management and workers are always there to answer your calls with a happy voice",
  },
  {
    name: "Sandi Satouf",
    avatar: "/avatars/s.webp",
    stars: 5,
    text: "Great customer service! Amazing people to work with, fast respond, very happy to work with bunny home care. I highly recommend!",
  },
   {
    name: "Mahadi N",
    avatar: "/avatars/mahadi n.webp",
    stars: 5,
    text: "Quick responses and great customer care.",
  },
  {
    name: "Sanjana Sara",
    avatar: "/avatars/sanjana.webp",
    stars: 5,
    text: "I will say they are amazing. The staff are amazing because they are super friendly. They are also very helpful because when I need anybody I call them and if they can’t answer they call as soon as they can. They helped me to get all the information I need. Overall everything there is amazing and positive.",
  },
  {
    name: "Yola Nakchbandi",
    avatar: "/avatars/Y-capital.webp",
    stars: 5,
    text: "Excellent communication, they are efficient and very professional.",
  },
  {
    name: "George Makhoul",
    avatar: "/avatars/G.webp",
    stars: 5,
    text: "The best home care.",
  },
  {
    name: "Nada Rabie",
    avatar: "/avatars/N.webp",
    stars: 5,
    text: "My experience with Bunny Home Care is very good.",
  },
  {
    name: "Elias Hechme",
    avatar: "/avatars/E.webp",
    stars: 5,
    text: "New clients with Bunny Home Care. We’ve had past experience with different agencies. But Bunny surpasses all of our expectations, from professionalism to simple attentiveness and understanding toward their clients needs. A pleasure to work and deal with Bunny Home Care.",
  },
  {
    name: "Raj Kumar",
    avatar: "/avatars/R.webp",
    stars: 5,
    text: "I am very happy with the service. They speak Hindi and guide me in every step with patience.",
  },
  {
    name: "Amani Hilo",
    avatar: "/avatars/armani hilo.webp",
    stars: 5,
    text: "Very good company and the people work there it's so nice.",
  },
  {
    name: "Raouf Ameerally",
    avatar: "/avatars/raouf ameerally.webp",
    stars: 5,
    text: "Bunny Health Care Is excellent my experiences pleasant and they are always willing to help",
  },
  {
    name: "Nida Hadeed",
    avatar: "/avatars/N.webp",
    stars: 5,
    text: "My experience with Bunny care is very good. They are flexible and efficient They’re helping a lot with my mother.",
  },
  {
    name: "T D",
    avatar: "/avatars/tarek.webp",
    stars: 5,
    text: "Great communication, Quick to assist, Very approachable",
  },
  {
    name: "Manpreet Gill",
    avatar: "/avatars/m.webp",
    stars: 5,
    text: "Bunny is a pleasure to work with. I've been very impressed with the compassionate service. I have referred them to my close friend who needed extra help caring for their parents. No complaints. Amazing company!!",
  },
   {
    name: "shah bhuiyan",
    avatar: "/avatars/shah.webp",
    stars: 5,
    text: "Bunny Home Care Service is outstanding! It has a very reliable, helpful, knowledgeable, professional, responding, dedicated, and overall friendly staff. Its customer service is very prompt to answer any questions. I would recommend you get services from Bunny Home Care. I must say that it, of course, deserves 5 stars due to its excellent services as recently I had the pleasure of dealing with its staff. Especially I’m thankful to Mrs. Anna and Mrs. Sabrina Arshi for their great help during the whole process! Bunny has exceeded my expectations! Thank you, Bunny!",
  },
  {
    name: "Lilit Margolin",
    avatar: "/avatars/Lilit.webp",
    stars: 5,
    text: "I recently had the pleasure of experiencing the Bunny Home Care Service, and I must say that it exceeded all of my expectations. The staff ‘s responsiveness and readiness to help in all the steps of the process is outstanding! Would recommend Bunny Home Care if you need your loved ones to be cared for, all your questions answered, great customer service, professional staff!",
  },
   {
    name: "Art Jagaryan",
    avatar: "/avatars/a.webp",
    stars: 5,
    text: "Great experience. The staff is very professional, helpful and knowledgeable, patiently guiding through every step of extensive paperwork process. It was a pleasure to deal with them.",
  },
  {
    name: "BEENA CHACKO",
    avatar: "/avatars/b.webp",
    stars: 5,
    text: "I had an amazing experience with them. They helped me a lot with my Dad’s case.",
  },
   {
    name: "Kamal Kalra",
    avatar: "/avatars/K.webp",
    stars: 5,
    text: "Bunny home care service it’s not just a care service they care about everything .I’m very happy to work with them. Great experience 👍thanks",
  },
   {
    name: "Tony Satouf",
    avatar: "/avatars/tony satouf.webp",
    stars: 5,
    text: "I had excellent service and customer care.",
  },
  {
    name: "Hiba Matar",
    avatar: "/avatars/hiba.webp",
    stars: 5,
    text: "The best home care ever❤️",
  },
  {
    name: "Georg Satouf",
    avatar: "/avatars/georg.webp",
    stars: 5,
    text: "Since I have started working with bunny home care ,it’s been a great experience . they are very responsible , responding , and very professional . we have never needed anything that was not provided to us as soon as possible, there system is very easy to use , I highly recommend Bunny home care to any of my family members and any family that need there services ,because I am very satisfied .",
  },
  {
    name: "Tarek Diab",
    avatar: "/avatars/tarek.webp",
    stars: 5,
    text: "My mom has been receiving home care from this agency and they have been really helpful and friendly all along. they provide excellent and reliable services and their staff are really professional.",
  },
  {
    name: "Mbaresa Morina",
    avatar: "/avatars/m.webp",
    stars: 5,
    text: "My experience with them is amazing, they helped a lot about my mother case. As a company I can say that they are, professionals, responsible, are great at communication, and give very positive vibes, I would higly recommend it!",
  },
];

function Home() {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
   const baseFrame =
    "rounded-xl shadow-xl w-[550px] md:w-[650px] h-[360px] md:h-[420px]";
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const swiperRef = useRef<any>(null);

  // ✅ Languages
  const languages = [
    { lang: "English", phone: "+1 267-483-9642" }, //ofis
    { lang: "Español", phone: "+1 267-483-9642" },
    { lang: "Français", phone: "+1 267-483-9642" },
    { lang: "Türkçe", phone: "+1 267-483-9642" },
    { lang: "हिन्दी", phone: "+1 267-483-9642" },
    { lang: "العربية", phone: "+1 267-483-9642" },
    { lang: "বাংলা", phone: "+1 267-483-9642" },
    { lang: "اردو", phone: "+1 267-483-9642" },
    { lang: "Shqip", phone: "+1 267-483-9642" },
    { lang: "Italiano", phone: "+1 267-483-9642" },
    { lang: "Pilipino", phone: "+1 267-483-9642" },
    { lang: "नेपाली", phone: "+1 267-483-9642" },
    { lang: "فارسی", phone: "+1 267-483-9642" },
    { lang: "ਪੰਜਾਬੀ", phone: "+1 267-483-9642" },
  ];

  // ✅ Services
  const caregiverServices = [
    {
      title: "Bathing",
      description: "Helping with safe and dignified bathing routines.",
      img: "/images/bathing.webp",
    },
    {
      title: "Dressing",
      description: "Assistance with clothing choices and dressing comfortably.",
      img: "/images/dressing.webp",
    },
    {
      title: "Light Housekeeping",
      description: "Keeping the home safe and tidy with light chores.",
      img: "/images/housekeeping.webp",
    },
    {
      title: "Laundry",
      description: "Assistance with washing, drying, and folding clothes.",
      img: "/images/laundry.webp",
    },
    {
      title: "Meal Preparation",
      description: "Preparing nutritious meals and assisting with feeding.",
      img: "/images/meal.webp",
    },
    {
      title: "Companionship",
      description: "Providing friendly and supportive interaction.",
      img: "/images/companionship.webp",
    },
    {
      title: "Grocery",
      description: "Helping pick groceries and making sure essentials are always stocked.",
      img: "/images/grocery.webp",
    },
    {
      title: "Socializing",
      description: "Encouraging activities that keep the mind and heart active.",
      img: "/images/social.webp",
    },
    {
      title: "Mobility Assistance",
      description: "Providing safe support while walking or moving around.",
      img: "/images/mobility.webp",
    },
  ];

  
  return (
    <div className="font-sans text-gray-800 text-center">
      <title>Bunny Home Care | Compassionate Multilingual Home Care</title>
      <meta 
        name="description" 
        content="Bunny Home Care provides professional, multilingual home care services for your family, helping you earn more while caring for your loved ones." 
      />

      {/* HERO */}
      <section className="bg-gray-50 min-h-[75vh] flex items-center pt-24">
        <div className="container mx-auto flex flex-col md:flex-row items-center px-8">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left flex flex-col justify-center space-y-6">
            {/* Başlık */}
            <h1 className="text-4xl md:text-6xl font-bold text-[#37575f] leading-tight">
              You Deserve Better Care.
            </h1>

            {/* Açıklama */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Earn{" "}
              <span className="font-semibold text-primary">
                $10,000 more in 5 years
              </span>
              , with the best rate in the area.*
            </p>
            {/* Footnote */}
            <p className="mt-2 text-xs text-left text-slate-500 italic">
              *Results may vary by case.
            </p>

            {/* Stats Row */}
            <div className="flex flex-row justify-center md:justify-start items-center gap-10 pt-2 flex-wrap order-1 md:order-none">
              {/* +20 Years Experience */}
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-900">+20</span>
                <p className="text-gray-600 text-sm">
                  Years of Combined Experience
                </p>
              </div>

              {/* Google Rating */}
              <a
                href="https://share.google/7TGMFrT77hWjpaoti"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center"
              >
                <div className="flex items-center justify-center gap-2">
                  <img
                    src="/logos/Google_logo.webp"
                    alt="Google"
                    className="h-6"
                  />
                  <span className="text-lg font-bold text-gray-900">5.0</span>
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                </div>
                <p className="text-sm text-gray-600">Customer Reviews</p>
              </a>
            </div>

            {/* Buttons row */}
            <div className="flex justify-center md:justify-start gap-4 pt-4 order-2 md:order-none">
              <a
                href="#switching"
                className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105"
              >
                Switch Now
              </a>
              <a
                href="https://meetings.hubspot.com/emeto/greet?uuid=ff1348cf-c6bd-432c-bf7c-13aca4ca3922"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get Your Offer
              </a>
            </div>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
      {/* Skeleton frame (resim yüklenene kadar) */}
      {!loaded && !error && (
        <div
          className={`${baseFrame} animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200`}
          aria-hidden
        />
      )}

      {/* Asıl görsel */}
      <img
        src="/images/bhc_hero.webp"
        alt="Happy seniors with Bunny mascot"
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`${baseFrame} transition-all duration-500 ${
          loaded ? "opacity-100 hover:scale-105" : "opacity-0"
        }`}
        style={{ objectFit: "cover" }}
      />

      {/* Hata durumunda fallback (opsiyonel) */}
      {error && (
        <div
          className={`${baseFrame} flex items-center justify-center bg-gray-100 text-gray-500`}
        >
          Image failed to load
        </div>
      )}
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
          <div className="md:w-1/2 md:pr-12 w-full text-center md:text-left">
            {/* 💻 Desktop version */}
            <div className="hidden md:block">
              <h2 className="text-3xl font-bold text-[#37575f] mb-6">About Us</h2>
              <p className="text-lg leading-relaxed text-gray-700">
                We hire family members or friends to take care of their seniors
                and they get paid for their help, or we find the best fit for
                their companionship and support on their daily basis activities.
              </p>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                With +20 years of combined experience and caring multicultural
                professionals, Bunny Home Care is a BBB A+ Certified Trusted
                Company focused on 5★ customer service in your language.
              </p>
            </div>

            {/* 📱 Mobile version - Modern Card Design */}
            <div className="md:hidden">
              <div className="bg-primary rounded-3xl shadow-xl border border-white/60 overflow-hidden backdrop-blur-sm">
                <button
                  type="button"
                  className="w-full flex justify-between items-center p-5 text-white md:text-gray-900 font-bold text-xl group"
                  onClick={() => {
                    const c = document.getElementById("about2");
                    const a = document.getElementById("arrow2");
                    c?.classList.toggle("hidden");
                    a?.classList.toggle("rotate-180");
                  }}
                    >
                  <span className="flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </span>

                    <span className="text-white md:text-gray-900">About Us</span>
                  </span>

                  <span
                    id="arrow2"
                    className="text-2xl text-white transform transition-transform duration-300 group-hover:scale-110"
                  >
                    ▼
                  </span>
                </button>


                <div
                  id="about2"
                  className="hidden px-6 pb-6 text-gray-700 text-base leading-relaxed space-y-4 animate-fadeIn"
                >

                   <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">💙</span>
                      <p>
                        We hire family members or friends to take care of their
                        seniors and they get paid for their help, or we find the
                        best fit for their companionship and support on their
                        daily activities.
                      </p>
                    </div>
                  </div>
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-md">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl mt-1">🏆</span>
                      <p>
                        With{" "}
                        <span className="font-semibold text-primary">
                          +20 years
                        </span>{" "}
                        of combined experience and caring multicultural
                        professionals, Bunny Home Care is a{" "}
                        <span className="font-semibold">BBB A+ Certified</span>{" "}
                        Trusted Company focused on 5★ customer service in your
                        language.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
            <img
              src="/images/bunny-flag.webp"
              alt="Bunny Mascot"
              className="max-w-sm w-full transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* WHAT WE OFFER */}
      <WhatWeOffer />

      {/* TESTIMONIALS */}
      <section className="px-6 py-16 bg-white" id="reviews">
        <h2 className="text-3xl font-bold text-[#37575f] mb-10 text-center">
          What People Say About Us
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
                </div>
                <img
                  src="/images/g_google.webp"
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
          <div className="relative w-full max-w-[280px] sm:max-w-[400px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
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
                { src: "/videos/mahadi.mp4", name: "Mahadi N." },
                { src: "/videos/wyatt.mp4", name: "Wyatt M." },
                { src: "/videos/azer.mp4", name: "Azer G." },
              ].map((video, index) => (
                <SwiperSlide
                  key={index}
                  className="flex items-center justify-center bg-black"
                >
                  <div className="relative w-full h-full">
                    <ReactPlayer
                      src={video.src}
                      controls={true}
                      playing={false}
                      width="100%"
                      height="100%"
                    />
                    <p className="absolute bottom-14 left-4 text-white font-semibold bg-black/50 px-3 py-1 rounded-lg z-10">
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

      <section className="bg-[rgb(239_246_255_/_var(--tw-bg-opacity,1))] py-20 px-6">
        {/* Başlıklar */}
        <div className="text-center mb-10">
          <h3 className="text-3xl font-semibold text-[#37575f] mb-4">
            How does Bunny Home Care do it?
          </h3>
          <h4 className="text-lg text-gray-600 font-medium">
            It’s not magic, but hard work on our customer service:
          </h4>
        </div>

        {/* Kartlar Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mt-10">
          {[
            {
              title: "Get Paid Every Friday",
              text: "Transparent payroll process, get paid every Friday",
              img: "/images/friday.webp",
            },
            {
              title: "Best Rates",
              text: "The highest pay rates in Pennsylvania.",
              img: "/images/best_rate.webp",
            },
            {
              title: "No Lost Hours",
              text: "Keep every hour you’ve worked without gaps.",
              img: "/images/hha.webp",
            },
            {
              title: "We Speak Your Language",
              text: "Support and service in 15+ languages.",
              img: "/images/wsyl.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center group transition-all duration-300 hover:transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-[#37575f] mb-2 transition-colors duration-300 group-hover:text-primary">
                {item.title}
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {item.text}
              </p>

              <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 object-cover rounded-xl shadow transition-all duration-300 group-hover:shadow-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SWITCHING */}
      <section className="px-6 py-20 bg-white" id="switching">
        {/* Başlık */}
        <h2 className="text-4xl font-extrabold text-center text-[#37575f] mb-4">
          Easy Switching
        </h2>
        <p className="text-center text-xl text-gray-700 mb-14">
          Switching to Bunny Home Care is very easy: it takes you just one call.
        </p>

        {/* Bunny + Chat Görseli */}
        <div className="max-w-4xl mx-auto flex items-center justify-center gap-6 md:gap-12 mb-24 md:mb-32 flex-nowrap">
          {/* Bunny */}
          <div className="flex-shrink-0">
            <img
              src="/images/Bunny_question.webp"
              alt="Do these sound familiar?"
              className="w-[130px] sm:w-[180px] md:w-[220px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Chat */}
          <div className="flex-shrink-0">
            <img
              src="/images/chat_bubbles.webp"
              alt="Complaints"
              className="w-[180px] sm:w-[260px] md:w-[340px] object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="tel:+12674839642"
            className="flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:opacity-90 transition duration-300"
          >
            {/* Phone Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.358 4.07a1 1 0 01-.272 1.032l-2.12 2.12a16.001 16.001 0 007.586 7.586l2.12-2.12a1 1 0 011.032-.272l4.07 1.358a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            Call Us Now
          </a>
        </div>
      </section>

      {/* LANGUAGES */}
      <section className="px-8 py-16 bg-blue-50" id="languages">
        <h2 className="text-2xl font-bold text-center text-[#37575f] mb-6">
          We Speak Your Language
        </h2>
        <p className="mb-10 text-center max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
          Our dedicated team speaks{" "}
          <span className="font-semibold text-primary">15+ languages</span> and
          knows your culture, so that you can express yourself comfortably.
          <br />
          <span className="text-gray-800 font-medium">
            Click on your preferred card to get more information in your
            language.
          </span>
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
                    <div className="absolute inset-0 flex items-center justify-center rounded-lg shadow-lg text-white font-bold text-lg backface-hidden bg-primary">
                      {lang.lang}
                    </div>

                    {/* Arka yüz */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-white text-gray-800 rounded-lg shadow-lg rotate-y-180 backface-hidden p-3">
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
        <h2 className="text-2xl font-bold text-[#37575f] mb-6">Accreditations</h2>
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
          {[
            { src: "/logos/bbb.webp", alt: "BBB" },
            { src: "/logos/amerihealth.webp", alt: "AmeriHealth" },
            { src: "/logos/keystone.webp", alt: "Keystone" },
            { src: "/logos/pahealth.webp", alt: "PA Health" },
            { src: "/logos/padepartment.webp", alt: "PA Department of Health" },
            { src: "/logos/upmc.webp", alt: "UPMC" },
          ].map((logo, i) => (
            <SwiperSlide
              key={i}
              className="flex items-center justify-center h-24" // eşit hizalama için sabit yükseklik
            >
              <div className="w-40 h-20 flex items-center justify-center bg-white rounded-xl shadow-sm p-3 hover:shadow-md transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* SUBSCRIBE / CAREGIVER FORM */}
      <section className="py-16 bg-[#f9fafb]" id="subscribe">
        <div className="max-w-3xl mx-auto px-6 text-center">
          {/* Başlık */}
          <h2 className="text-3xl font-bold mb-4 text-[#37575f]">
            Become a Caregiver with Bunny Home Care
          </h2>
          <p className="text-gray-600 mb-8">
            Fill out the form below and our team will reach out to you.
          </p>

          {/* Form Container */}
          <div
            id="custom-hubspot-form"
            className="bg-white/95 shadow-xl rounded-2xl p-8 md:p-10 border border-gray-100 mx-auto w-full max-w-[700px]"
          >
            <div className="flex justify-center">
              <div className="w-full">
                <HubspotForm
                  portalId="44032932"
                  formId="b20f10f2-517b-4833-a8fb-7bf6ac8f46bd"
                  region="na1"
                  loading={
                    <div className="text-gray-500 text-lg">Loading form...</div>
                  }
                  onSubmit={() => console.log("✅ HubSpot form submitted!")}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAREGIVER’S ROLE */}
      <section className="px-8 py-16 bg-white" id="services">
        <h2 className="text-3xl font-bold text-center mb-10 text-[#37575f]">
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
      <section
        id="contact"
        className="relative  bg-blue-50 py-20"
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#37575f] mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions? We're here to help you with caring solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* ✅ Left Side - HubSpot Form Embed */}
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 transform transition-all duration-300 hover:shadow-2xl">
              <h3 className="text-2xl font-bold text-[#37575f] mb-6">
                Send us a Message
              </h3>
              {/* HubSpot Form Container */}
              <HubspotForm
                portalId="44032932"
                formId="5156a776-4e3b-4010-8b3c-5714b2c42332"
                region="na1"
                loading={
                  <div className="text-gray-500 text-lg">Loading form...</div>
                }
                onSubmit={() => console.log("✅ Contact form submitted!")}
              />
            </div>

            {/* Right Side - Contact Info & Quick Actions */}
            <div className="space-y-6">
              {/* Contact Methods */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-[#37575f] mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
  <a
    href="tel:+12674839642"
    className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:from-primary/10 hover:to-teal-100 transition-all duration-300 group"
  >
    <div className="flex-1">
      <p className="text-sm text-white font-medium">Phone</p>
      <p className="text-lg font-semibold text-white">
        +1 267-483-9642
      </p>
    </div>
  </a>

  <a
    href="mailto:help@bunnyhomecare.com"
    className="flex items-center gap-4 p-4 bg-primary rounded-xl hover:from-primary/10 hover:to-teal-100 transition-all duration-300 group"
  >
    <div className="flex-1">
      <p className="text-sm text-white font-medium">Email</p>
      <p className="text-lg font-semibold text-white">
        help@bunnyhomecare.com
      </p>
    </div>
  </a>
</div>

              </div>

              {/* Counties We Serve */}
              <div className="bg-white rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl">
                <h3 className="text-2xl font-bold text-[#37575f] mb-6">
                  Counties We Serve
                </h3>
                <div className="grid grid-cols-2 gap-3">
                {[
                  "Berks",
                  "Bucks",
                  "Carbon",
                  "Chester",
                  "Dauphin",
                  "Delaware",
                  "Lancaster",
                  "Lebanon",
                  "Lehigh",
                  "Luzerne",
                  "Monroe",
                  "Montgomery",
                  "Northampton",
                  "Philadelphia",
                  "Schuylkill",
                  "York",
                ].map((county, index) => (
                  <div
                    key={index}
                    className="px-4 py-2 bg-primary rounded-lg text-center font-medium text-white transition-all duration-300 hover:scale-105"
                  >
                    {county}
                  </div>
                ))}
              </div>
              </div>
            </div>
          </div>

          {/* Office Locations (Aynı kalıyor) */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-[#37575f] mb-8 text-center">
              Our Office Locations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="group">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#37575f] mb-2 group-hover:text-primary transition-colors duration-300">
                    Greater Philadelphia
                  </h4>
                  <p className="text-sm text-gray-600">Main Office</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <iframe
                    src="https://www.google.com/maps?q=Bunny+Home+Care,+1000+NORTHBROOK+DR,+STE+124,+Feasterville+Trevose,+PA+19053&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="transition-all duration-300"
                  ></iframe>
                </div>
              </div>

              <div className="group">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#37575f] mb-2 group-hover:text-primary transition-colors duration-300">
                    Allentown
                  </h4>
                  <p className="text-sm text-gray-600">Regional Office</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <iframe
                    src="https://www.google.com/maps?q=Bunny+Home+Care,+4905+Tilghman+St+%23300,+Allentown,+PA+18104&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="transition-all duration-300"
                  ></iframe>
                </div>
              </div>

              <div className="group">
                <div className="mb-4">
                  <h4 className="text-xl font-bold text-[#37575f] mb-2 group-hover:text-primary transition-colors duration-300">
                    Lancaster
                  </h4>
                  <p className="text-sm text-gray-600">Regional Office</p>
                </div>
                <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl">
                  <iframe
                    src="https://www.google.com/maps?q=Bunny+Home+Care,+Lancaster,+PA&output=embed"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    loading="lazy"
                    className="transition-all duration-300"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;