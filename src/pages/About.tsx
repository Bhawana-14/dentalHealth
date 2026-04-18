import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { WhyChooseUs } from '../components/Services';
import { Team, HowItWorks } from '../components/Team';
import { Stats, Skills, Gallery } from '../components/Footer';
import { CheckCircle2, Award, Users, Heart } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-white">
      <PageHeader 
        title="About Us" 
        subtitle="Dedicated to providing the highest quality dental care in a comfortable and friendly environment."
      />
      
      {/* Mission & Vision Section */}
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Clinic" 
                className="w-full h-[500px] object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-orange rounded-full -z-10 opacity-10 blur-3xl"></div>
            
            {/* Experience Badge */}
            <div className="absolute -left-8 bottom-12 bg-brand-teal p-8 rounded-2xl shadow-xl text-white z-20">
              <div className="text-4xl font-black">25+</div>
              <div className="text-xs font-bold uppercase tracking-widest opacity-80">Years Experience</div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-subtitle text-left">WHO WE ARE</span>
            <h2 className="section-title text-left mb-8">We Are Committed To Your Smile & Oral Health</h2>
            <p className="text-gray-500 mb-8 leading-relaxed text-lg">
              Since 2001, Dental & Health has been at the forefront of dental innovation, providing comprehensive oral healthcare to thousands of families. Our mission is to combine cutting-edge technology with a compassionate, patient-centered approach.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {[
                "Modern Equipment",
                "Expert Doctors",
                "Affordable Prices",
                "Emergency Care",
                "Comfortable Clinic",
                "Personalized Plans"
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-brand-teal" size={20} />
                  <span className="font-bold text-brand-navy">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 items-center border-t border-gray-100 pt-10">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-navy">15+</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Awards Won</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center text-brand-teal">
                  <Heart size={32} />
                </div>
                <div>
                  <div className="text-2xl font-black text-brand-navy">100%</div>
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Satisfaction</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* <Stats /> */}
      <WhyChooseUs />
      <Skills />
      <HowItWorks />
      <Team />
      <Gallery />
    </div>
  );
};
