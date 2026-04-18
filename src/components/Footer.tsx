import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Users, Stethoscope, Smile, Award, Star, Quote, Mail, Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export const Stats = () => {
  const stats = [
    { icon: <Stethoscope size={40} />, count: "50+", label: "Expert Doctors" },
    { icon: <Users size={40} />, count: "120+", label: "Different Services" },
    { icon: <Smile size={40} />, count: "2500+", label: "Happy Patients" },
    { icon: <Award size={40} />, count: "15+", label: "Awards Win" }
  ];

  return (
    <section className="bg-brand-orange py-16 text-white overflow-hidden">
      <div className="container-custom grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="bg-white/20 p-4 rounded-full mb-2">
              {stat.icon}
            </div>
            <div className="text-4xl font-extrabold">{stat.count}</div>
            <div className="text-sm font-bold uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export const Skills = () => {
  const skills = [
    { label: "Dental Protection", percent: 95 },
    { label: "Oral Surgery", percent: 85 },
    { label: "Expert Consultation", percent: 90 },
    { label: "Cosmetic Dentistry", percent: 80 }
  ];

  return (
    <section className="section-padding bg-transparent overflow-hidden">
      <div className="container-custom grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative grid grid-cols-2 gap-4"
        >
          <img 
            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=400" 
            alt="Dental Skill 1" 
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=400" 
            alt="Dental Skill 2" 
            className="w-full h-64 object-cover rounded-xl shadow-lg mt-12"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=400" 
            alt="Dental Skill 3" 
            className="w-full h-64 object-cover rounded-xl shadow-lg -mt-12"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" 
            alt="Dental Skill 4" 
            className="w-full h-64 object-cover rounded-xl shadow-lg"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-subtitle text-left">OUR SKILLS</span>
          <h2 className="section-title text-left mb-8">We Have Expert Skills in Dental Solutions</h2>
          <p className="text-gray-500 mb-10 leading-relaxed">
            Our team continuously updates their skills and knowledge to provide the most advanced dental treatments. 
            We use state-of-the-art technology to ensure the best outcomes for our patients.
          </p>

          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center font-bold text-brand-navy">
                  <span>{skill.label}</span>
                  <span>{skill.percent}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-brand-teal"
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export const Testimonials = () => {
  const reviews = [
    { name: "John Doe", role: "Patient", quote: "I had a great experience at Dental Health. The staff was very professional and the treatment was painless. I highly recommend them!", rating: 5 },
    { name: "Jane Smith", role: "Patient", quote: "The best dental clinic I've ever visited. Dr. Sarah was very patient and explained everything clearly. My smile has never looked better!", rating: 5 }
  ];

  return (
    <section className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Patients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-10 rounded-2xl shadow-lg relative overflow-hidden"
            >
              <Quote className="absolute top-6 right-6 text-brand-teal/10" size={80} />
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-gray-500 text-lg italic mb-8 relative z-10 leading-relaxed">
                "{review.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-teal rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-navy">{review.name}</h4>
                  <p className="text-brand-teal text-sm font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=600"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextSlide, 3000);
      return () => clearInterval(interval);
    }
  }, [isHovered]);

  return (
    <section 
      className="bg-white overflow-hidden relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 768 ? 2 : 5))}%)` }}>
        {images.map((img, index) => (
          <div key={index} className="w-1/2 md:w-1/5 flex-shrink-0 aspect-square overflow-hidden border-r border-white">
            <img 
              src={img} 
              alt={`Gallery ${index}`} 
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-navy shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-brand-teal hover:text-white"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-brand-navy shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-20 hover:bg-brand-teal hover:text-white"
      >
        <ChevronRight size={24} />
      </button>

      {/* Progress Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {images.map((_, i) => (
          <div 
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${currentIndex === i ? 'w-6 bg-brand-teal' : 'w-1.5 bg-white/50'}`}
          />
        ))}
      </div>
    </section>
  );
};

export const Blog = () => {
  const posts = [
    { title: "How to Maintain Your Smile", category: "Dental Health", date: "Mar 15, 2026", author: "Admin", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600" },
    { title: "The Benefits of Regular Checkups", category: "Health", date: "Mar 12, 2026", author: "Admin", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600" },
    { title: "New Technology in Dentistry", category: "Technology", date: "Mar 10, 2026", author: "Admin", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600" }
  ];

  return (
    <section className="section-padding bg-transparent">
      <div className="container-custom">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-subtitle">OUR BLOG</span>
          <h2 className="section-title">Latest Articles & News</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-lg group"
            >
              <div className="relative overflow-hidden aspect-video">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-brand-teal text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-semibold">
                  <span>{post.date}</span>
                  <span>BY {post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-6 group-hover:text-brand-teal transition-colors cursor-pointer">
                  {post.title}
                </h3>
                <a href="#" className="text-brand-teal font-bold text-sm flex items-center gap-2 hover:gap-3 transition-all">
                  READ MORE <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Newsletter = () => {
  return (
    <section className="bg-brand-teal py-12 transition-colors duration-500">
      <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-white text-center md:text-left">
          <h2 className="text-3xl font-extrabold mb-2 text-white">Join Our Newsletter</h2>
          <p className="font-semibold opacity-90">Stay updated with the latest dental news and offers.</p>
        </div>
        <div className="flex w-full md:w-auto max-w-md">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="grow bg-white px-6 py-4 rounded-l-md focus:outline-none text-brand-navy"
          />
          <button className="bg-brand-navy text-white px-8 py-4 rounded-r-md font-bold hover:bg-slate-800 transition-all">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 overflow-hidden">
      <div className="container-custom grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 bg-brand-teal rounded-full flex items-center justify-center"> */}
              {/* <span className="text-white font-bold text-xl">D</span> */}

               <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src="/dhlogo4.png" 
                  alt="Dental & Health Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            {/* </div> */}
            <span className="text-2xl font-extrabold tracking-tighter">
              DENTAL <span className="text-brand-teal ml-2">&</span><span className="text-brand-teal ml-2">HEALTH</span>
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            We are committed to providing the highest quality dental health in a comfortable and friendly environment. 
            Your smile is our priority.
          </p>
          <div className="flex gap-4">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer">
              <Facebook size={18} />
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer">
              <Twitter size={18} />
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer">
              <Instagram size={18} />
            </div>
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-teal transition-all cursor-pointer">
              <Linkedin size={18} />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-teal">About</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-semibold">
            <li><Link to="/about" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> About Us</Link></li>
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2 font-bold text-brand-orange"><ArrowRight size={14} /> Our Portfolio</Link></li>
            <li><Link to="/about" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Our Team</Link></li>
            <li><Link to="/" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Latest Blog</Link></li>
            <li><Link to="/contact" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Appointment</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-teal">Services</h4>
          <ul className="space-y-4 text-gray-400 text-sm font-semibold">
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Root Canals</Link></li>
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Orthopecics</Link></li>
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Bridges</Link></li>
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Dental Services</Link></li>
            <li><Link to="/services" className="hover:text-brand-teal transition-colors cursor-pointer flex items-center gap-2"><ArrowRight size={14} /> Orthodontics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xl font-bold mb-8 relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-12 after:h-1 after:bg-brand-teal">Contact Info</h4>
          <ul className="space-y-6 text-gray-400 text-sm font-semibold">
            <li className="flex items-start gap-4">
              <MapPin className="text-brand-teal shrink-0" size={20} />
              <span>VLPL Mall, 1st Floor, Shop F-169,
Sector 83, Gurugram 94103, India</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-brand-teal shrink-0" size={20} />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="text-brand-teal shrink-0" size={20} />
              <span>info@dentalandhealth.in</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 pt-10 text-center text-gray-500 text-sm font-semibold">
        <p>© 2026 Dental&Health. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
