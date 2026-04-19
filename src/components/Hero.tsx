import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User, Sparkles, ShieldCheck, HeartPulse } from 'lucide-react';

const heroImages = [
  "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000",
  "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000"
];

export const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Mouse follow effect
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const isMobile = window.innerWidth < 768;
    if(!isMobile){
      const { clientX, clientY } = e;
      mouseX.set(clientX - window.innerWidth / 2);
      mouseY.set(clientY - window.innerHeight / 2);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const titleWords = "We Provide Best Dental Solutions".split(" ");

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className=" bg-transparent md:pb-36 relative min-h-[80vh] sm:min-h-[90vh] flex items-center overflow-hidden pt-10 sm:pt-14 pb-12 sm:pb-20"
    >
      {/* Dynamic Background Accents */}
      <motion.div 
        style={{ x: mouseX, y: mouseY, opacity: 0.1 }}
        className="absolute top-1/4 left-1/4 w-40 sm:w-80 h-40 sm:h-80 bg-brand-teal rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        style={{ x: useTransform(mouseX, (v) => -v), y: useTransform(mouseY, (v) => -v), opacity: 0.1 }}
        className="absolute bottom-1/4 right-1/4 w-120 h-120 bg-brand-orange rounded-full blur-[100px] pointer-events-none"
      />

      {/* Background Text Accent with Color Cycle */}
      <motion.div 
        style={{ y: backgroundY }}
        animate={{ 
          color: ["#f0f9ff", "#fff7ed", "#f0fdf4", "#f0f9ff"],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black opacity-20 select-none pointer-events-none transition-all duration-1000 whitespace-nowrap"
      >
        SMILE
      </motion.div>
      
      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <motion.div 
          style={{ y: textY, opacity, scale }}
          className="relative"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-teal/10 rounded-full mb-6 border border-brand-teal/20">
            <Sparkles className="text-brand-teal" size={16} />
            <span className="text-brand-teal font-black text-[10px] tracking-[0.2em] uppercase">
              Top Dental Care
            </span>
          </div>

          <h1 className="text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-brand-navy">
            {titleWords.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: i * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className={`inline-block mr-2 sm:mr-3 ${word === "Dental" ? "text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange" : ""}`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-slate-500 text-base sm:text-lg mb-6 sm:mb-10 max-w-lg leading-relaxed font-medium"
          >
            Experience the next generation of dental care. We combine artistry with advanced technology to create your perfect smile.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' })}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 text-xs sm:text-sm bg-brand-navy text-white rounded-2xl font-black tracking-widest overflow-hidden shadow-2xl shadow-brand-navy/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                BOOK APPOINTMENT <Calendar size={20} />
              </span>
              <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </motion.button>

            {/* <motion.button 
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })}
              className="group px-10 py-5 border-2 border-slate-200 text-brand-navy rounded-2xl font-black text-sm tracking-widest hover:border-brand-teal hover:text-brand-teal transition-all flex items-center gap-3"
            >
              PATIENT STORIES <User size={20} />
            </motion.button> */}
          </motion.div>

          {/* Trust Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8 border-t border-slate-100 pt-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-teal/10 rounded-xl flex items-center justify-center text-brand-teal">
                <ShieldCheck size={20} />
              </div>
              <div>
                <div className="text-sm font-black text-brand-navy">Certified</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Periodontist</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-orange/10 rounded-xl flex items-center justify-center text-brand-orange">
                <HeartPulse size={20} />
              </div>
              <div>
                <div className="text-sm font-black text-brand-navy">Premium</div>
                <div className="text-[10px] text-slate-400 font-bold uppercase">Patient Care</div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, delay: 0.4, type: "spring" }}
          className="relative h-75 sm:h-100 md:h-125 lg:h-150"
        >
          {/* Main Image Container with Advanced 3D-like Animation */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotateZ: [0, 2, 0],
            }}
            transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
            className="relative z-10 rounded-[4rem] overflow-hidden shadow-[0_50px_120px_rgba(14,165,233,0.2)] border-[12px] border-white h-full w-full group"
          >
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImageIndex}
                src={heroImages[currentImageIndex]} 
                alt="Professional Dental Care" 
                initial={{ opacity: 0, scale: 1.2, filter: "blur(10px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-linear-to-t from-brand-navy/40 via-transparent to-transparent"></div>
          </motion.div>

          {/* Floating Stat Card 1: Happy Patients */}
          {/* <motion.div 
            animate={{ 
              y: [0, -15, 0],
              x: [0, 10, 0]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="absolute -right-12 top-1/4 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-4xl shadow-2xl flex items-center gap-5 border border-white/50"
          >
            <div className="w-14 h-14 bg-brand-orange text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-orange/20">
              <User size={28} />
            </div>
            <div>
              <div className="text-3xl font-black text-brand-navy leading-none">15k+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Happy Patients</div>
            </div>
          </motion.div> */}

          {/* Floating Stat Card 2: Experience */}
          {/* <motion.div 
            animate={{ 
              y: [0, 15, 0],
              x: [0, -10, 0]
            }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
            className="absolute -left-16 bottom-1/4 z-20 bg-white/90 backdrop-blur-xl p-6 rounded-4xl shadow-2xl flex items-center gap-5 border border-white/50"
          >
            <div className="w-14 h-14 bg-brand-teal text-white rounded-2xl flex items-center justify-center shadow-lg shadow-brand-teal/20">
              <Calendar size={28} />
            </div>
            <div>
              <div className="text-3xl font-black text-brand-navy leading-none">25+</div>
              <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">Years Experience</div>
            </div>
          </motion.div> */}

          {/* Decorative Floating Shapes */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-10 -right-10 w-40 h-40 border-4 border-brand-teal/20 rounded-[3rem] -z-10"
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-orange/20 rounded-full blur-2xl -z-10"
          />
        </motion.div>
      </div>
    </section>
  );
};

export const MarqueeBar = () => {
  const lines = [
    "Your Smile, Our Priority.",
    "Excellence in Every Smile.",
    "Trusted Care for Healthy Smiles.",
    "Where Dentistry Meets Precision."
  ];

  return (
    <div className="bg-brand-navy py-10 md:py-16 overflow-hidden relative">
      {/* Intense Flash Sweep Animation */}
      <motion.div 
        initial={{ x: "-100%" }}
        animate={{ x: "200%" }}
        transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
        className="absolute inset-0 bg-linear-to-r from-transparent via-brand-teal/20 to-transparent skew-x-20 z-10 pointer-events-none"
      />
      
      <div className="flex whitespace-nowrap">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex items-center gap-20 text-white font-black uppercase tracking-tighter text-4xl md:text-4xl"
        >
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              {lines.map((line, index) => (
                <motion.div 
                  key={`${i}-${index}`} 
                  className="flex items-center gap-20"
                  animate={{ 
                    opacity: [0.3, 1, 0.3],
                    scale: [0.95, 1, 0.95],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 2, 
                    delay: index * 0.2,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-slate-500">{line}</span>
                  <span className="text-brand-teal drop-shadow-[0_0_20px_rgba(0,193,182,0.8)]">✦</span>
                </motion.div>
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
