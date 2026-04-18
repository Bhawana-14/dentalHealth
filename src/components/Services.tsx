import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Shield, Heart, Activity, UserCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination,Autoplay} from 'swiper/modules';

// const services = [
//   {
//     icon: <Shield className="text-brand-teal" size={40} />,
//     title: "Root Canals",
//     description: "We provide comprehensive dental protection services to keep your teeth healthy and strong for years to come."
//   },
//   {
//     icon: <Heart className="text-brand-teal" size={40} />,
//     title: "Heart Care Dental",
//     description: "Our specialized heart-care dental services ensure that your oral health doesn't impact your overall wellbeing."
//   },
//   {
//     icon: <Activity className="text-brand-teal" size={40} />,
//     title: "Oral Surgery",
//     description: "Expert oral surgery with minimal discomfort and fast recovery times, handled by our top-tier surgical team."
//   },
//   {
//     icon: <UserCheck className="text-brand-teal" size={40} />,
//     title: "Expert Consultation",
//     description: "Get professional advice and consultation from our experienced dentists for all your dental concerns."
//   }
// ];
const services = [
  {
    icon: <Shield className="text-brand-teal" size={40} />,
    title: "Root Canal Treatment",
    description: "Painless root canal procedures to treat infected teeth and preserve your natural smile."
  },
  {
    icon: <Activity className="text-brand-teal" size={40} />,
    title: "Orthopedics",
    description: "Comprehensive care for bone and joint-related conditions to support overall physical health."
  },
  {
    icon: <UserCheck className="text-brand-teal" size={40} />,
    title: "Dental Bridges",
    description: "Strong and natural-looking bridges to replace missing teeth and restore functionality."
  },
  {
    icon: <Heart className="text-brand-teal" size={40} />,
    title: "Dental Services",
    description: "Routine checkups, cleaning, fillings, and preventive treatments for complete oral care."
  },
  {
    icon: <Activity className="text-brand-teal" size={40} />,
    title: "Orthodontics",
    description: "Braces and aligners to straighten teeth and correct bite alignment."
  }
];

export const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden transition-colors duration-700 py-10"
    >
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-24 -left-24 w-96 h-96 bg-brand-teal rounded-full blur-[100px] pointer-events-none"
      ></motion.div>
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.03, 0.08, 0.03]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-brand-orange rounded-full blur-[120px] pointer-events-none"
      ></motion.div>

      {/* Floating Sparkles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.3 }}
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 5 + i, 
            repeat: Infinity, 
            delay: i * 0.5 
          }}
          className="absolute text-brand-teal pointer-events-none hidden lg:block"
          style={{ 
            top: `${15 + i * 15}%`, 
            left: `${10 + (i % 3) * 35}%` 
          }}
        >
          <Sparkles size={24} />
        </motion.div>
      ))}
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-block px-6 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-brand-teal/20"
          >
            OUR SERVICES
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight">What We <span className="text-brand-teal">Provide</span></h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            We offer a wide range of dental services to ensure your smile stays bright and healthy. 
            From routine checkups to complex surgeries, we've got you covered.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"> */}
        <div className="">
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
            1280: { slidesPerView: 4 },
          }}
        >
          {services.map((service, index) => (
            <SwiperSlide key={index} className="h-auto flex">
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 40, rotateX: -15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -15, scale: 1.02 }}
              className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] min-h-105 flex flex-col h-full w-full shadow-[0_20px_60px_rgba(0,0,0,0.04)] group transition-all duration-500 hover:shadow-[0_40px_100px_rgba(14,165,233,0.15)] border border-white/50 hover:border-brand-teal/20 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <motion.div 
                animate={{ 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 4 + index, 
                  ease: "easeInOut" 
                }}
                className="mb-10 w-20 h-20 bg-brand-bg-light rounded-4 flexlx items-center justify-center group-hover:bg-brand-teal group-hover:text-white transition-all duration-500 shadow-inner relative z-10"
              >
                <div className="group-hover:scale-110 transition-transform duration-500">
                  {React.cloneElement(service.icon as React.ReactElement, { 
                    className: "group-hover:text-white transition-colors duration-500",
                    size: 36
                  })}
                </div>
              </motion.div>
              <h3 className="text-2xl font-black mb-4 text-brand-navy group-hover:text-brand-teal transition-colors duration-500 relative z-10">{service.title}</h3>
              {/* <p className="text-slate-500 mb-10 text-sm leading-relaxed font-medium relative z-10"> */}
              <p className="text-slate-500 mb-10 text-sm leading-relaxed font-medium relative z-10 grow">
                {service.description}
              </p>
              {/* <a href="#" className="text-brand-teal font-black text-[10px] tracking-[0.2em] flex items-center gap-3 group/link relative z-10 uppercase">
                READ MORE 
                <motion.div 
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-8 h-8 rounded-full bg-brand-teal/10 flex items-center justify-center group-hover/link:bg-brand-teal group-hover/link:text-white transition-all"
                >
                  <ArrowRight size={14} />
                </motion.div>
              </a> */}
            </motion.div>
            </SwiperSlide>
          ))}
          </Swiper>
        </div>
      </div>
    </motion.section>
  );
};export const WhyChooseUs = () => {
  const benefits = [
    { title: "Quality Staff", desc: "Our team consists of highly trained and experienced dental professionals." },
    { title: "Quality Assistance", desc: "We provide 24/7 assistance and support for all our patients' needs." },
    { title: "Affordable Price", desc: "Get top-quality dental care at prices that won't break the bank." },
    { title: "Optimized Solutions", desc: "We use the latest technology to provide the most effective treatments." }
  ];

  return (
    <section className="section-padding bg-transparent overflow-hidden relative">
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0ea5e9 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[3rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.1)] relative z-10 border-8 border-white">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000" 
              alt="Dental Health" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute -bottom-10 -right-10 bg-brand-navy p-10 rounded-[2.5rem] text-white shadow-2xl z-20 hidden md:block border-4 border-white"
          >
            <div className="text-5xl font-black mb-1 text-brand-teal">25+</div>
            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Years Experience</div>
          </motion.div>
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl -z-10"
          ></motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-block px-6 py-2 bg-brand-teal/10 text-brand-teal rounded-full text-[10px] font-black tracking-[0.3em] uppercase mb-6 border border-brand-teal/20"
          >
            WHY CHOOSE US
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-8 tracking-tight leading-tight">We Are Best Dental <br /><span className="text-brand-teal">Care Solutions</span></h2>
          <p className="text-slate-500 mb-12 leading-relaxed text-lg font-medium">
            We pride ourselves on providing the best dental care in the region. 
            Our commitment to excellence and patient satisfaction is what sets us apart.
          </p>

          <div className="grid sm:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-3xl hover:bg-brand-bg-light transition-colors duration-500 border border-transparent hover:border-brand-teal/10"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-brand-teal/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-brand-teal group-hover:text-white transition-all duration-500">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <h4 className="font-black text-brand-navy text-lg mb-2 group-hover:text-brand-teal transition-colors">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-medium">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-10 py-5 bg-brand-navy text-white rounded-2xl font-black text-sm tracking-widest mt-12 overflow-hidden shadow-2xl shadow-brand-navy/20"
          >
            <span className="relative z-10">EXPLORE MORE</span>
            <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
;
