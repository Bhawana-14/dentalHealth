import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Star, Heart, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

const cases = [
  {
    title: "Full Smile Makeover",
    description: "Complete restoration using porcelain veneers and whitening.",
    category: "Cosmetic",
    image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800",
    stats: "10 Veneers"
  },
  {
    title: "Dental Implants",
    description: "Natural-looking replacement for missing teeth with titanium implants.",
    category: "Restorative",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    stats: "2 Implants"
  },
  {
    title: "Invisalign Treatment",
    description: "Clear aligner therapy for perfect teeth alignment without braces.",
    category: "Orthodontics",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
    stats: "12 Months"
  },
  {
    title: "Professional Whitening",
    description: "In-office laser whitening for a significantly brighter smile.",
    category: "Cosmetic",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800",
    stats: "8 Shades Lighter"
  }
];

export const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding overflow-hidden relative transition-colors duration-1000"
    >
      {/* Background Accent */}
      <motion.div 
        style={{ 
          x: useTransform(scrollYProgress, [0, 1], [0, 150]),
          rotate: useTransform(scrollYProgress, [0, 1], [-12, 12])
        }}
        className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/5 -skew-x-12 translate-x-1/4 -z-10 blur-3xl"
      ></motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        animate={{ 
          y: [0, -40, 0],
          rotate: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 left-10 text-brand-teal/20 pointer-events-none hidden lg:block"
      >
        <Star size={60} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ 
          y: [0, 30, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 right-10 text-brand-orange/20 pointer-events-none hidden lg:block"
      >
        <Heart size={80} fill="currentColor" />
      </motion.div>
      <motion.div
        animate={{ 
          opacity: [0.1, 0.3, 0.1],
          scale: [1, 1.5, 1]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-brand-teal/10 pointer-events-none"
      >
        <Sparkles size={200} />
      </motion.div>
      
      <div className="container-custom relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="section-subtitle text-left"
            >
              OUR PORTFOLIO
            </motion.span>
            <h2 className="section-title text-left mb-0">Real Results for <span className="text-brand-teal">Real Smiles</span></h2>
            <p className="text-slate-500 mt-6 text-lg leading-relaxed font-medium">
              Explore our collection of successful dental transformations. From subtle enhancements to complete smile makeovers, we take pride in every patient's journey.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <Link to="/services" className="group relative px-8 py-4 bg-white rounded-2xl font-black text-brand-navy shadow-[0_15px_40px_rgba(14,165,233,0.08)] hover:shadow-sky-300/20 transition-all flex items-center gap-3 overflow-hidden border border-sky-50">
              <span className="relative z-10 text-sm tracking-wider">VIEW ALL CASES</span>
              <ArrowRight size={18} className="relative z-10 group-hover:translate-x-2 transition-transform text-brand-teal" />
              <div className="absolute inset-0 bg-gradient-to-r from-sky-50 to-white translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </Link> */}
          </motion.div>
        </div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"> */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {cases.map((item, index) => {
            
            const cardRef = React.useRef(null);
            const { scrollYProgress: cardProgress } = useScroll({
              target: cardRef,
              offset: ["start end", "end start"]
            });
            const y = useTransform(cardProgress, [0, 1], [0, -30]);

            return (
               <SwiperSlide key={index}>
                  <motion.div
                    key={index}
                    ref={cardRef}
                    style={{ y }}
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="group relative bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-slate-50 hover:shadow-[0_20px_60px_rgba(14,165,233,0.1)] transition-all duration-700"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <motion.img 
                        src={item.image} 
                        alt={item.title} 
                        style={{ scale: useTransform(cardProgress, [0, 1], [1, 1.1]) }}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 via-brand-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xl px-3 py-1.5 rounded-lg text-[9px] font-black text-brand-teal uppercase tracking-[0.2em] shadow-lg border border-white/20">
                        {item.category}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-lg font-black text-brand-navy mb-1 group-hover:text-brand-teal transition-colors duration-500 leading-tight">{item.title}</h3>
                          <p className="text-slate-500 text-xs leading-relaxed max-w-xs font-medium">{item.description}</p>
                        </div>
                        <motion.div 
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="bg-brand-teal text-white px-3 py-1.5 rounded-lg text-[9px] font-black shadow-lg shadow-sky-200 flex-shrink-0"
                        >
                          {item.stats}
                        </motion.div>
                      </div>
                      
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-brand-teal font-black text-[10px] uppercase tracking-widest">
                          <div className="w-6 h-6 bg-brand-teal/10 rounded-md flex items-center justify-center">
                            <CheckCircle2 size={12} />
                          </div>
                          <span>Success</span>
                        </div>
                        {/* <motion.div 
                          whileHover={{ x: 3, scale: 1.1 }}
                          className="w-8 h-8 rounded-lg bg-brand-navy text-white flex items-center justify-center cursor-pointer shadow-lg hover:bg-brand-teal transition-all duration-300"
                        >
                          <ArrowRight size={14} />
                        </motion.div> */}
                      </div>
                    </div>
                  </motion.div>
              </SwiperSlide>
            );
          })}
        {/* </div> */}
        </Swiper>

        {/* Bottom Accent */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 bg-gradient-to-br from-brand-navy to-slate-900 rounded-[3rem] p-12 text-white relative overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.25)]"
        >
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-black text-white mb-3 tracking-tight">Ready for your own <br /><span className="text-brand-teal">transformation?</span></h3>
              <p className="text-white text-lg font-medium">Schedule a consultation today and start your journey to a perfect smile.</p>
            </div>
            <Link to="/contact" className="group relative bg-brand-teal text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-sky-500/20 overflow-hidden transition-all hover:scale-105 active:scale-95">
              <span className="relative z-10 tracking-wider">BOOK AN APPOINTMENT</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </Link>
          </div>
          
          {/* Decorative Background Circles */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-teal rounded-full opacity-10 blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-brand-orange rounded-full opacity-10 blur-[100px]"></div>
          
          {/* Abstract Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </motion.div>
      </div>
    </motion.section>
  );
};
