import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { Plus, Minus, Facebook, Twitter, Instagram, Linkedin, Share2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks = () => {
  const steps = [
    { number: "01", title: "Book Appointment", desc: "Easily book your dental appointment online or via phone.", icon: "📅" },
    { number: "02", title: "Get Consultation", desc: "Meet our expert dentists for a thorough consultation.", icon: "👨‍⚕️" },
    { number: "03", title: "Start Treatment", desc: "Begin your personalized dental treatment plan.", icon: "🦷" }
  ];

  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0EA5E9 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="section-subtitle">HOW IT WORKS</span>
          <h2 className="section-title">3 Easy Steps to Get Care</h2>
          <p className="text-slate-500 max-w-2xl mx-auto mt-4">We've streamlined our process to ensure you get the best dental care with minimal hassle.</p>
        </motion.div>

        <div className="relative grid md:grid-cols-3 gap-16">
          {/* Connecting Line (Desktop) */}
          <div className="absolute top-1/3 left-0 w-full h-0.5 border-t-2 border-dashed border-brand-teal/20 -translate-y-1/2 hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-36 h-36 bg-white rounded-3xl flex items-center justify-center text-6xl shadow-2xl mb-8 relative transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:shadow-sky-200/50 border border-slate-100">
                {step.icon}
                <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-brand-teal to-brand-orange text-white rounded-2xl flex items-center justify-center font-black text-xl shadow-lg rotate-12 group-hover:rotate-0 transition-transform duration-500">
                  {step.number}
                </div>
              </div>
              <h3 className="text-2xl font-black mb-4 text-brand-navy group-hover:text-brand-teal transition-colors">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const faqs = [
  { question: "How often should I visit the dentist?", answer: "It's generally recommended to visit the dentist every six months for a routine checkup and cleaning to maintain optimal oral health." },
  { question: "What should I do in a dental emergency?", answer: "Contact us immediately. We offer emergency dental services to handle urgent issues like severe pain, broken teeth, or lost fillings." },
  { question: "Are dental X-rays safe?", answer: "Yes, modern dental X-rays use very low levels of radiation and are considered safe for both children and adults." },
  { question: "How can I whiten my teeth safely?", answer: "We offer professional teeth whitening treatments that are safe and effective, providing much better results than over-the-counter products." }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-padding bg-transparent relative overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="section-subtitle text-left">COMMON QUESTIONS</span>
          <h2 className="section-title text-left mb-10">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-2xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'shadow-xl shadow-sky-100 border-brand-teal/20' : 'border-slate-100 hover:border-brand-teal/30 shadow-sm'} border`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className={`w-full flex justify-between items-center p-6 text-left font-black transition-all ${openIndex === index ? 'bg-brand-teal text-white' : 'bg-white text-brand-navy hover:bg-sky-50/50'}`}
                >
                  <span className="text-lg">{faq.question}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-500 ${openIndex === index ? 'bg-white/20 rotate-180' : 'bg-slate-100'}`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="bg-white"
                    >
                      <div className="p-6 text-slate-500 text-lg leading-relaxed border-t border-slate-50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, type: "spring" }}
          className="relative flex justify-center"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-teal/20 to-brand-orange/20 rounded-[3rem] blur-3xl -z-10 animate-pulse"></div>
          <div className="relative p-4 bg-white rounded-[4rem] shadow-2xl border border-slate-100">
            <img 
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
              alt="Dental Consultation" 
              className="w-full max-w-md rounded-[3rem] object-cover aspect-[4/5]"
              referrerPolicy="no-referrer"
            />
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl border border-slate-50 flex items-center gap-4"
            >
              <div className="w-14 h-14 bg-brand-teal rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
                <Plus size={32} />
              </div>
              <div>
                <div className="text-2xl font-black text-brand-navy">24/7</div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Emergency Support</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const team = [
  { 
    name: "Dr. Viyanti Wadhwa", 
    specialty: "Periodontist", 
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400",
    bio: "Dr. Viyanti Wadhwa has over 15 years of experience in creating perfect smiles through advanced orthodontic treatments."
  }
];

export const Team = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms for various elements
  const y1 = useTransform(scrollYProgress, [0, 1], [-150, 150]);
  const y2 = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const y4 = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [360, 0]);
  const scale1 = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 0.8]);

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden transition-colors duration-1000"
    >
      {/* Dynamic Background Accents with Parallax */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div 
          style={{ y: y1, rotate: rotate1 }}
          className="absolute top-20 -left-20 w-[600px] h-[600px] bg-brand-teal/5 rounded-full blur-[120px]"
        />
        <motion.div 
          style={{ y: y2, rotate: rotate2 }}
          className="absolute bottom-20 -right-20 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-[120px]"
        />
        
        {/* Abstract Floating Shapes with Parallax */}
        <motion.div 
          style={{ y: y3, scale: scale1 }}
          animate={{ 
            rotate: [0, 10, 0]
          }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          className="absolute top-1/4 right-[10%] w-32 h-32 border-4 border-brand-teal/10 rounded-3xl -rotate-12"
        />
        <motion.div 
          style={{ y: y4 }}
          animate={{ 
            rotate: [0, -10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
          className="absolute bottom-1/4 left-[5%] w-40 h-40 border-4 border-brand-orange/10 rounded-full"
        />

        {/* Additional Parallax Elements */}
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [-200, 200]) }}
          className="absolute top-1/2 right-[5%] text-9xl font-black text-brand-teal/5 select-none"
        >
          EXPERT
        </motion.div>
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [200, -200]) }}
          className="absolute bottom-1/3 left-[10%] text-9xl font-black text-brand-orange/5 select-none"
        >
          SMILE
        </motion.div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.4em" }}
            className="text-brand-teal font-black text-xs uppercase tracking-[0.4em] mb-6 block"
          >
            MEET OUR EXPERT
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-black text-brand-navy tracking-tight mb-6">
            The Hands Behind <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-brand-orange">Your Perfect Smile</span>
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            className="h-2 bg-gradient-to-r from-brand-teal to-brand-orange mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        <div className="flex justify-center">
          {team.map((member, index) => {
            const cardRef = useRef<HTMLDivElement>(null);
            const x = useSpring(0, { stiffness: 100, damping: 30 });
            const y = useSpring(0, { stiffness: 100, damping: 30 });
            const rotateX = useTransform(y, [-100, 100], [10, -10]);
            const rotateY = useTransform(x, [-100, 100], [-10, 10]);

            const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              const centerX = rect.left + rect.width / 2;
              const centerY = rect.top + rect.height / 2;
              x.set(e.clientX - centerX);
              y.set(e.clientY - centerY);
            };

            const handleMouseLeave = () => {
              x.set(0);
              y.set(0);
            };

            return (
              <motion.div 
                key={index}
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, perspective: 1000 }}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="group relative max-w-5xl w-full"
              >
                <div className="bg-white rounded-[4rem] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] border border-white/50 flex flex-col md:flex-row h-full transition-all duration-700 hover:shadow-[0_60px_150px_rgba(14,165,233,0.25)] relative z-10">
                  {/* Image Side with Parallax Effect */}
                  <div className="md:w-5/12 relative overflow-hidden h-[400px] md:h-auto">
                    <motion.img 
                      src={member.image} 
                      alt={member.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Social Overlay - Always visible but enhanced on hover */}
                    <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-navy/90 via-brand-navy/40 to-transparent">
                      <div className="flex gap-3 justify-center">
                        {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                          <motion.div 
                            key={i}
                            whileHover={{ y: -10, scale: 1.2, backgroundColor: "#0EA5E9" }}
                            className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl flex items-center justify-center text-white transition-all cursor-pointer border border-white/20"
                          >
                            <Icon size={20} />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="md:w-7/12 p-12 md:p-20 flex flex-col justify-center bg-gradient-to-br from-white via-white to-sky-50/30">
                    <motion.div
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4, duration: 0.6 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <div className="h-px w-12 bg-brand-teal"></div>
                        <span className="text-brand-teal font-black text-sm uppercase tracking-[0.4em]">
                          {member.specialty}
                        </span>
                      </div>
                      
                      <h3 className="text-5xl md:text-7xl font-black text-brand-navy mb-8 tracking-tight group-hover:text-brand-teal transition-colors duration-500 leading-[0.9]">
                        {member.name}
                      </h3>
                      
                      <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium">
                        {member.bio}
                      </p>
                      
                      <div className="grid sm:grid-cols-2 gap-6 mb-12">
                        {[
                          { label: '15+ Years Experience', icon: '🏆' },
                          { label: 'Board Certified Expert', icon: '🎓' },
                          { label: 'Advanced Orthodontics', icon: '✨' },
                          { label: 'Patient Choice Award', icon: '❤️' }
                        ].map((skill, i) => (
                          <motion.div 
                            key={i} 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 + (i * 0.1) }}
                            className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 group/skill hover:bg-white hover:shadow-xl transition-all duration-300"
                          >
                            <div className="text-2xl">{skill.icon}</div>
                            <span className="text-sm font-black text-brand-navy uppercase tracking-wider">{skill.label}</span>
                          </motion.div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-8">
                        <Link to="/contact" className="group/btn relative inline-flex items-center gap-6 bg-brand-navy text-white px-10 py-5 rounded-3xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-brand-navy/20 hover:bg-brand-teal transition-all duration-500 overflow-hidden">
                          <span className="relative z-10">Book Consultation</span>
                          <ArrowRight size={20} className="relative z-10 group-hover/btn:translate-x-2 transition-transform" />
                          <div className="absolute inset-0 bg-gradient-to-r from-brand-teal to-sky-400 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                        </Link>
                        
                        <div className="flex -space-x-4">
                          {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-lg">
                              <img src={`https://i.pravatar.cc/150?u=${i + 10}`} alt="Patient" className="w-full h-full object-cover" />
                            </div>
                          ))}
                          <div className="w-12 h-12 rounded-full bg-brand-orange text-white flex items-center justify-center font-black text-xs border-4 border-white shadow-lg">
                            +2k
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
                
                {/* Floating Decorative Elements */}
                <motion.div 
                  animate={{ 
                    y: [0, -30, 0],
                    rotate: [0, 360, 0]
                  }}
                  transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
                  className="absolute -top-12 -right-12 w-40 h-40 bg-gradient-to-br from-brand-teal/20 to-transparent rounded-full blur-2xl -z-10"
                />
                <motion.div 
                  animate={{ 
                    y: [0, 30, 0],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                  className="absolute -bottom-12 -left-12 w-56 h-56 bg-gradient-to-tr from-brand-orange/10 to-transparent rounded-full blur-3xl -z-10"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};
