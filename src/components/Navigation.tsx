import React, { useState, useEffect, useRef } from 'react';
import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X } from 'lucide-react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';

export const TopBar = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const y = useTransform(scrollY, [0, 100], [0, -50]);
  return (
    <motion.div 
      style={{ opacity, y }}
      className="bg-brand-navy text-white py-2 hidden lg:block border-b border-white/10 relative z-[60]"
    >
      <div className="container-custom flex justify-between items-center text-sm">
        <div className="flex gap-6">
          <div className="flex items-center gap-2 group cursor-pointer">
            <Mail size={14} className="text-brand-teal group-hover:scale-110 transition-transform" />
            <span className="hover:text-brand-teal transition-colors">info@dentalandhealth.in</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <MapPin size={14} className="text-brand-teal group-hover:scale-110 transition-transform" />
            <span className="hover:text-brand-teal transition-colors">VLPL Mall, 1st Floor, Shop F-169,
               Sector 83, Gurugram</span>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer">
            <Phone size={14} className="text-brand-teal group-hover:scale-110 transition-transform" />
            <span className="hover:text-brand-teal transition-colors">+1 (555) 123-4567</span>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex gap-4">
            <Facebook size={14} className="hover:text-brand-teal cursor-pointer transition-all hover:scale-125" />
            <Twitter size={14} className="hover:text-brand-teal cursor-pointer transition-all hover:scale-125" />
            <Instagram size={14} className="hover:text-brand-teal cursor-pointer transition-all hover:scale-125" />
            <Linkedin size={14} className="hover:text-brand-teal cursor-pointer transition-all hover:scale-125" />
          </div>
          <div className="overflow-hidden w-64 bg-brand-orange/20 rounded-full px-4 py-1.5 relative border border-brand-orange/30">
            {/* Flash Animation Sweep */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "200%" }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", repeatDelay: 1 }}
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-20 z-10 pointer-events-none"
            />
            <motion.div 
              animate={{ x: [260, -260] }}
              transition={{ repeat: Infinity, duration: 7, ease: "linear" }}
              className="whitespace-nowrap text-[10px] font-black text-white flex items-center gap-2 relative z-0 tracking-widest"
            >
              <motion.span
                animate={{ 
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360]
                }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-white"
              >
                ★
              </motion.span>
              100% DENTAL SOLUTION
              <motion.span
                animate={{ 
                  opacity: [1, 0.3, 1],
                  scale: [1, 1.2, 1],
                  rotate: [0, -180, -360]
                }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="text-white"
              >
                ★
              </motion.span>z
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const NavLink = ({ link, textColor, onClick }: { link: any, textColor: any, onClick: (e: React.MouseEvent, path: string, isScroll?: boolean) => void }) => {
  const x = useSpring(0, { stiffness: 100, damping: 10 });
  const y = useSpring(0, { stiffness: 100, damping: 10 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.5);
    y.set((e.clientY - centerY) * 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <Link 
        to={link.path} 
        onClick={(e) => onClick(e, link.path, link.isScroll)}
        className="relative group/link py-2 px-4 block"
      >
        <motion.span 
          style={{ color: textColor }}
          className="relative z-10 transition-colors group-hover/link:opacity-70"
        >
          {link.name}
        </motion.span>
        <motion.div 
          className="absolute bottom-0 left-0 w-0 h-[2px] bg-current transition-all duration-300 group-hover/link:w-full"
        />
      </Link>
    </motion.div>
  );
};

export const Navbar = () => {
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Map scroll progress to navbar background colors with glassmorphism
  // const backgroundColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
  //   [
  //     'rgba(255, 255, 255, 0.8)',    // Glassy White (Start)
  //     'rgba(14, 165, 233, 0.85)',   // Glassy Teal
  //     'rgba(15, 23, 42, 0.85)',     // Glassy Navy
  //     'rgba(56, 189, 248, 0.85)',   // Glassy Sky
  //     'rgba(14, 165, 233, 0.85)',   // Glassy Teal
  //     'rgba(15, 23, 42, 0.85)',     // Glassy Navy
  //     'rgba(14, 165, 233, 0.9)'     // Glassy Teal (End)
  //   ]
  // );

  // Map scroll progress to text colors
  const textColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    [
      '#0F172A', // Navy (Start)
      '#0F172A', // White
      '#0F172A', // White
      '#0F172A', // White
      '#0F172A', // White
      '#0F172A', // White
      '#0F172A'  // White (End)
    ]
  );

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'TESTIMONIALS', path: '#testimonials', isScroll: true },
    { name: 'CONTACT', path: '/contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, isScroll?: boolean) => {
    if (isScroll && location.pathname === '/') {
      e.preventDefault();
      const id = path.replace('#', '');
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 px-4 py-4 pointer-events-none">
      <motion.nav 
        // style={{ backgroundColor }}
        className={`bg-[#cad1cf] container-custom backdrop-blur-xl  border border-white/10 pointer-events-auto rounded-4xl transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden ${isScrolled ? 'py-3' : 'py-5'}`}
      >
        {/* Animated Border Gradient */}
        <motion.div 
          animate={{ 
            background: [
              "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
              "linear-gradient(90deg, transparent 100%, rgba(255,255,255,0.3) 150%, transparent 200%)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
          className="absolute inset-0 pointer-events-none opacity-30"
        />

        {/* Scroll Progress Indicator */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[2px] bg-white/50 z-20"
          style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
        />

        <div className="flex justify-between items-center px-6">
          {/* <Link to="/" className="flex items-center gap-3 group"> */}
            {/* <motion.div 
              style={{ backgroundColor: useTransform(scrollYProgress, [0, 0.1], ['#0EA5E9', '#FFFFFF']) }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] shadow-lg"
            >
              <motion.span 
                style={{ color: useTransform(scrollYProgress, [0, 0.1], ['#FFFFFF', '#0EA5E9']) }}
                className="font-black text-xl"
              > */}
              {/* <div className="w-14 h-14 flex items-center justify-center">
                <img src="/dhlogo2.png"/>
                </div> */}
              {/* </motion.span>
            </motion.div> */}
            {/* <motion.span 
              style={{ color: textColor }}
              className="text-2xl font-black tracking-tighter flex items-center"
            >
              DENTAL & <motion.span style={{ color: useTransform(scrollYProgress, [0, 0.1], ['#0EA5E9', '#0F172A']) }} className="font-light"> Health</motion.span>
            </motion.span>
          </Link> */}

          <Link to="/" className="flex items-center gap-3 group">
  
              {/* Logo */}
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/dhlogo4.png" 
                  alt="Dental & Health Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text */}
            <motion.span 
              style={{ color: textColor }}
              className="text-2xl font-black tracking-tight flex items-center"
            >
              DENTAL &

              <motion.span
                style={{
                  color: useTransform(scrollYProgress, [0, 0.1], ['rgb(13 113 69)', 'rgb(12 62 40)'])
                }}
                className=" ml-1 "
              >
                Health
              </motion.span>
            </motion.span>

          </Link>
          
          <div className="hidden md:flex items-center gap-4 font-black text-[10px] tracking-[0.2em]">
            {navLinks.map((link) => (
              <div key={link.name}>
                <NavLink link={link} textColor={textColor} onClick={handleNavClick} />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 md:gap-6">
            <motion.div style={{ color: textColor }} className="hidden sm:block">
              <Search size={20} className="cursor-pointer transition-all hover:scale-125 hover:rotate-12" />
            </motion.div>
            <button 
              onClick={() => {
                if (location.pathname === '/') {
                  document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#appointment';
                }
              }}
              className={`hidden sm:flex px-8 py-3 rounded-2xl font-black text-[10px] tracking-widest transition-all duration-500 shadow-lg hover:scale-105 active:scale-95 ${isScrolled ? 'bg-white text-brand-teal hover:bg-brand-navy hover:text-white' : 'bg-brand-navy text-white hover:bg-brand-teal'}`}
            >
              APPOINTMENT
            </button>
            
            {/* Mobile Menu Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20"
              style={{ color: textColor }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-white/10 mt-4 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-6 font-black text-[10px] tracking-[0.2em]">
                {navLinks.map((link) => (
                  <Link 
                    key={link.name}
                    to={link.path} 
                    onClick={(e) => handleNavClick(e, link.path, link.isScroll)}
                    className="py-2 border-b border-white/5 last:border-0"
                    style={{ color: textColor }}
                  >
                    {link.name}
                  </Link>
                ))}
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    if (location.pathname === '/') {
                      document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      window.location.href = '/#appointment';
                    }
                  }}
                  className="w-full py-4 rounded-2xl bg-brand-teal text-white font-black text-[10px] tracking-widest"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </nav>
  );
};
