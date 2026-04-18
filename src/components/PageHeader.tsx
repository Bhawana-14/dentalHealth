import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <section className="relative py-24 bg-brand-navy overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-teal/10 skew-x-12 -mr-24 -z-0"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-orange/10 -skew-x-12 -ml-12 -z-0"></div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-white mb-6 tracking-tight">
            {title}
          </h1>
          
          {subtitle && (
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8 font-medium">
              {subtitle}
            </p>
          )}
          
          <nav className="flex items-center justify-center gap-2 text-sm font-bold uppercase tracking-widest">
            <Link to="/" className="text-brand-teal hover:text-white transition-colors">Home</Link>
            <ChevronRight size={16} className="text-gray-600" />
            <span className="text-white">{title}</span>
          </nav>
        </motion.div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#00C1B6 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
    </section>
  );
};
