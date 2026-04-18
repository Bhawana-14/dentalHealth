import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useSpring, useTransform, useScroll } from 'motion/react';
import { Calendar, User, Mail, Phone, MessageSquare, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const Appointment = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });
  
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!formRef.current) return;
    const rect = formRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);
  
      const formData = new FormData(e.currentTarget);
      const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        message: formData.get('message'),
        type: 'appointment'
     };
  
      try {
        const response = await fetch('/api/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          setIsSubmitted(true);
        } else {
          const errData = await response.json();
          setError(errData.error || 'Failed to send message. Please try again.');
        }
      } catch (err) {
        setError('An error occurred. Please check your connection.');
      } finally {
        setIsSubmitting(false);
      }
    };

  return (
    <motion.section 
      ref={sectionRef}
      className="section-padding relative overflow-hidden transition-colors duration-1000" 
      id="appointment"
    >
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-teal/5 -skew-x-12 -translate-x-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-brand-orange/5 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Sparkles */}
      <motion.div
        animate={{ 
          opacity: [0.1, 0.4, 0.1],
          y: [0, -30, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 right-1/2 text-brand-teal/20 pointer-events-none"
      >
        <Sparkles size={60} />
      </motion.div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="section-subtitle text-left">BOOK APPOINTMENT</span>
            <h2 className="section-title text-left mb-8">Ready to Transform <br /><span className="text-brand-teal">Your Smile?</span></h2>
            <p className="text-slate-500 text-xl leading-relaxed mb-12 font-medium">
              Schedule your consultation today and take the first step towards a healthier, brighter smile. Our experts are ready to help you.
            </p>

            <div className="space-y-8">
              {[
                { icon: <CheckCircle2 className="text-brand-teal" />, title: "Expert Consultation", desc: "Get a personalized treatment plan from our top dentists." },
                { icon: <CheckCircle2 className="text-brand-teal" />, title: "Modern Technology", desc: "We use the latest dental tech for precise and painless care." },
                { icon: <CheckCircle2 className="text-brand-teal" />, title: "Flexible Scheduling", desc: "Choose a time that works best for your busy lifestyle." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  className="flex gap-6 items-start"
                >
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-sky-200/50 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-black text-brand-navy mb-2">{item.title}</h4>
                    <p className="text-slate-500 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            ref={formRef}
            style={{ rotateX, rotateY }}
          >
            <div className="bg-white/90 backdrop-blur-2xl p-12 rounded-[4rem] shadow-[0_40px_100px_rgba(14,165,233,0.12)] border border-white/50 relative z-10 overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                  {error && (
                    <div className="p-4 bg-red-50 text-red-500 rounded-xl text-sm font-bold text-center">
                      {error}
                    </div>
                  )}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-brand-navy uppercase tracking-widest ml-1">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/50" size={18} />
                          <input 
                            name="name"
                            type="text" 
                            required 
                            placeholder="John Doe"
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-teal transition-all placeholder:text-slate-300 font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-brand-navy uppercase tracking-widest ml-1">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/50" size={18} />
                          <input 
                            name="email"
                            type="email" 
                            required 
                            placeholder="john@example.com"
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-teal transition-all placeholder:text-slate-300 font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black text-brand-navy uppercase tracking-widest ml-1">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/50" size={18} />
                          <input 
                            name="phone"
                            type="tel" 
                            required 
                            placeholder="+1 (555) 000-0000"
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-teal transition-all placeholder:text-slate-300 font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-black text-brand-navy uppercase tracking-widest ml-1">Preferred Date</label>
                        <div className="relative">
                          <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-teal/50" size={18} />
                          <input 
                            type="date" 
                            name="date"
                            required 
                            min={new Date().toISOString().split("T")[0]}
                            className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-teal transition-all font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black text-brand-navy uppercase tracking-widest ml-1">Your Message</label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-6 text-brand-teal/50" size={18} />
                        <textarea 
                          name="message"
                          rows={4} 
                          placeholder="Tell us about your dental concerns..."
                          className="w-full bg-slate-50 border-none rounded-2xl py-4 pl-12 pr-4 focus:ring-2 focus:ring-brand-teal transition-all placeholder:text-slate-300 font-medium resize-none"
                        ></textarea>
                      </div>
                    </div>

                    <button 
                      type="submit" 
                      className="w-full bg-brand-teal text-white py-5 rounded-2xl font-black shadow-xl shadow-sky-500/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 group"
                    >
                      BOOK APPOINTMENT
                      <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-24 h-24 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-8">
                      <CheckCircle2 size={48} />
                    </div>
                    <h3 className="text-4xl font-black text-brand-navy mb-4">Request Received!</h3>
                    <p className="text-slate-500 text-lg font-medium leading-relaxed">
                      Thank you for booking with us. <br />Our team will contact you shortly to confirm your appointment.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="mt-10 text-brand-teal font-black text-sm uppercase tracking-widest hover:gap-3 flex items-center gap-2 mx-auto transition-all"
                    >
                      BOOK ANOTHER <ArrowRight size={18} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating Accents */}
            <motion.div 
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl -z-10"
            ></motion.div>
            <motion.div 
              animate={{ 
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-teal/10 rounded-full blur-3xl -z-10"
            ></motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
