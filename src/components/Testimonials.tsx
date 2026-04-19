import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { Quote, Star, CheckCircle2, Sparkles } from 'lucide-react';

const testimonials = [
  {
    name: "Vinus Gupta",
    role: "Patient",
    content: "The best dental experience I've ever had! The staff is incredibly friendly and the results are amazing.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Akshay Kumar",
    role: "Patient",
    content: "I was nervous about my root canal, but Dr. Viyanti made me feel completely at ease. Highly recommend!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Nevida Gupta",
    role: "Patient",
    content: "My Invisalign treatment was life-changing. The progress tracking was so easy and the results are perfect.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
    rating: 5
  },
  {
    name: "Mukul",
    role: "Patient",
    content: "Professional, clean, and efficient. I never have to wait long and the care is top-notch.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    rating: 4
  }
];

export const Testimonials = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding overflow-hidden relative transition-colors duration-1000" 
      id="testimonials"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1],
            x: (mousePos.x - window.innerWidth / 2) * 0.05,
            y: (mousePos.y - window.innerHeight / 2) * 0.05,
          }}
          transition={{ 
            rotate: { duration: 30, repeat: Infinity, ease: "linear" },
            scale: { duration: 30, repeat: Infinity, ease: "linear" },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
          className="absolute -top-48 -left-48 w-96 h-96 border-2 border-brand-teal/10 rounded-[4rem]"
        ></motion.div>
        <motion.div 
          animate={{ 
            rotate: [360, 0],
            scale: [1, 1.2, 1],
            x: (mousePos.x - window.innerWidth / 2) * -0.03,
            y: (mousePos.y - window.innerHeight / 2) * -0.03,
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 40, repeat: Infinity, ease: "linear" },
            x: { type: "spring", stiffness: 50 },
            y: { type: "spring", stiffness: 50 }
          }}
          className="absolute -bottom-48 -right-48 w-[30rem] h-[30rem] border-2 border-brand-orange/10 rounded-full"
        ></motion.div>

        {/* Floating Sparkles */}
        <motion.div
          animate={{ 
            opacity: [0.1, 0.4, 0.1],
            y: [0, -20, 0]
          }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-1/4 right-1/4 text-brand-teal/20"
        >
          <Sparkles size={40} />
        </motion.div>
      </div>

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
            TESTIMONIALS
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-navy mb-6 tracking-tight leading-tight">What Our <span className="text-brand-teal">Patients Say</span></h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-teal to-brand-orange mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative">
          {/* Horizontal Scroll Container */}
          <div 
            ref={containerRef}
            className="flex gap-8 overflow-x-auto pb-16 scrollbar-hide snap-x snap-mandatory px-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex-shrink-0 w-[320px] md:w-[450px] snap-center"
              >
                <motion.div 
                  whileHover={{ y: -15, scale: 1.02 }}
                  className="bg-white/80 backdrop-blur-xl p-10 rounded-[3rem] h-full relative group hover:bg-brand-navy transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(15,23,42,0.2)] border border-slate-100 hover:border-white/10"
                >
                  <div className="absolute top-8 right-10 text-brand-teal/20 group-hover:text-white/10 transition-colors">
                    <Quote size={60} />
                  </div>
                  
                  <div className="flex gap-1 mb-8">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < item.rating ? "fill-brand-orange text-brand-orange" : "text-slate-300"} 
                      />
                    ))}
                  </div>

                  <p className="text-slate-600 text-lg leading-relaxed mb-10 group-hover:text-slate-300 transition-colors italic font-medium">
                    "{item.content}"
                  </p>

                  <div className="flex items-center gap-5 pt-8 border-t border-slate-200 group-hover:border-white/10 transition-colors">
                    {/* <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-16 h-16 rounded-2xl object-cover border-2 border-white shadow-xl group-hover:border-brand-teal transition-all"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-brand-teal rounded-full flex items-center justify-center text-white shadow-lg">
                        <CheckCircle2 size={12} />
                      </div>
                    </div> */}
                    <div>
                      <h4 className="font-black text-brand-navy text-lg group-hover:text-white transition-colors tracking-tight">{item.name}</h4>
                      <p className="text-brand-teal text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-brand-teal transition-colors">{item.role}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
