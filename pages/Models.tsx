import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ExternalLink } from 'lucide-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Models.css'; // We'll create this for custom swiper overrides if needed

const models = [
  {
    id: 1,
    title: "Pack FIVE",
    description: "Le Comptoir des Oliviers",
    image: "https://res.cloudinary.com/dnmhz4hmz/image/upload/f_auto,q_auto/v1772286024/le-comptoir-des-oliviers.netlify.app__4_uddn6o.png",
    link: "https://le-comptoir-des-oliviers.netlify.app/",
    color: "from-purple-500 to-indigo-600"
  },
  {
    id: 2,
    title: "Pack ONE",
    description: "Atelier Fenêtre Sud",
    image: "https://res.cloudinary.com/dnmhz4hmz/image/upload/f_auto,q_auto/v1772285899/atelier-fenetre-sud.netlify.app__3_rbrwxk.png",
    link: "https://atelier-fenetre-sud.netlify.app/",
    color: "from-pink-500 to-rose-600"
  },
  {
    id: 3,
    title: "Pack FIVE",
    description: "Studio Mistral",
    image: "https://res.cloudinary.com/dnmhz4hmz/image/upload/f_auto,q_auto/v1772286023/studio-mistral.netlify.app__1_mfnonk.png",
    link: "https://studio-mistral.netlify.app/",
    color: "from-blue-500 to-cyan-600"
  }
];

export const Models: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-start pt-32 pb-20 px-4 overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Modèles</span>
        </h1>
        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
          Explorez ces sites de démonstration pour visualiser le potentiel de votre futur projet. Ces exemples illustrent la qualité et le soin apportés à chacune de nos créations.
        </p>
      </div>

      <div className="w-full max-w-7xl mx-auto relative">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          initialSlide={1}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="mySwiper !pb-24"
          breakpoints={{
            320: {
              slidesPerView: 1.2,
              spaceBetween: 20
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 30
            },
            1024: {
              slidesPerView: 2, // Shows part of side slides
              spaceBetween: 40
            }
          }}
        >
          {models.map((model) => (
            <SwiperSlide key={model.id} className="max-w-[800px] w-full">
              {({ isActive }) => (
                <div className="flex flex-col items-center">
                  <div 
                    className={`
                      relative group rounded-2xl overflow-hidden transition-all duration-500 w-full
                      ${isActive ? 'shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] scale-100 opacity-100 ring-1 ring-white/10' : 'scale-90 opacity-60 blur-[1px]'}
                      bg-slate-900 border border-slate-800
                    `}
                  >
                    {/* Browser Header */}
                    <div className="h-10 bg-slate-950/80 backdrop-blur border-b border-slate-800 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="flex-1 flex justify-center">
                        <div className="h-5 w-40 bg-slate-800/50 rounded-full" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                      <img 
                        src={model.image} 
                        alt={model.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-500/80 to-pink-500/80 backdrop-blur-md border border-white/20 text-white text-sm font-bold shadow-lg tracking-wide">
                          {model.title}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Button Below Card */}
                  <div className={`
                    mt-8 transition-all duration-500 z-20
                    ${isActive ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}
                  `}>
                    <a 
                      href={model.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`
                        group/btn relative px-8 py-3 rounded-full bg-white text-slate-900 font-semibold 
                        shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]
                        transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2
                      `}
                      onClick={(e) => e.stopPropagation()} // Prevent swiper click interference
                    >
                      <span>Voir le site en direct</span>
                      <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
