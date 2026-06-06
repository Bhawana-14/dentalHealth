import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Smile, ArrowRight, Home } from 'lucide-react';

export const NotFound = () => {
  return (
    <div className="bg-white">
      <section className="relative section-padding overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/5 skew-x-12 -mr-24 -z-0"></div>
        <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-orange/5 -skew-x-12 -ml-12 -z-0"></div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="w-24 h-24 rounded-3xl bg-brand-teal/10 text-brand-teal flex items-center justify-center mx-auto mb-8">
              <Smile size={48} />
            </div>
            <h1 className="text-7xl md:text-8xl font-black text-brand-navy mb-4 tracking-tight">404</h1>
            <h2 className="text-2xl md:text-3xl font-black text-brand-navy mb-6 tracking-tight">Looks like this page took the day off</h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12 font-medium">
              The page you're looking for doesn't exist or may have been moved. Let's get you back to a healthy smile.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <Link
                to="/"
                className="group relative px-8 py-4 bg-brand-navy text-white rounded-2xl font-black text-sm tracking-widest overflow-hidden shadow-2xl shadow-brand-navy/20 inline-flex items-center gap-3"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Home size={18} /> BACK TO HOME
                </span>
                <div className="absolute inset-0 bg-brand-teal translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </Link>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-black text-sm tracking-widest text-brand-navy border-2 border-slate-200 hover:border-brand-teal hover:text-brand-teal transition-all"
              >
                CONTACT US <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0D7145 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </section>
    </div>
  );
};
