import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);
  setError(null);

  const formData = new FormData(e.currentTarget);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    type: 'contact'
  };

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setIsSubmitted(true);
      e.currentTarget.reset();
    } else {
      const err = await res.json();
      setError(err.error || 'Something went wrong');
    }
  } catch {
    setError('Network error');
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to help you with any questions or concerns you may have about your dental health."
      />
      
      <section className="section-padding">
        <div className="container-custom grid lg:grid-cols-3 gap-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-bg-light p-10 rounded-3xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <MapPin size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Our Location</h3>
            <p className="text-white font-medium leading-relaxed">
              VLPL Mall, 1st Floor, Shop F-169 <br />
              Sector 83, Gurugram, India
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-brand-bg-light p-10 rounded-3xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Phone size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Call Us</h3>
            <p className="text-white font-medium leading-relaxed">
              +91 9560904233<br />+1 (555) 987-6543
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-brand-bg-light p-10 rounded-3xl text-center border border-gray-100"
          >
            <div className="w-16 h-16 bg-brand-teal/10 rounded-full flex items-center justify-center text-white mx-auto mb-6">
              <Mail size={32} />
            </div>
            <h3 className="text-xl font-bold text-brand-navy mb-4">Email Us</h3>
            <p className="text-white font-medium leading-relaxed">
              info@dentalandhealth.in
            </p>
          </motion.div>
        </div>
      </section>
      
      <section className="pb-24">
        <div className="container-custom grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-[40px] shadow-[0_30px_100px_rgba(0,0,0,0.05)] border border-gray-100"
          >
            <h2 className="text-3xl font-black text-brand-navy mb-8 tracking-tight">Send Us a Message</h2>
              {isSubmitted && (
                <p className="text-green-600 font-medium">
                  Message sent successfully!
                </p>
              )}

              {error && (
                <p className="text-red-600 font-medium">
                  {error}
                </p>
              )}
              <form onSubmit={handleSubmit}  className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input type="text"  name="name" placeholder="John Doe" className="w-full bg-gray-50 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input type="email"  name="email" placeholder="john@example.com" className="w-full bg-gray-50 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Subject</label>
                <input type="text"   name="subject" placeholder="General Inquiry" className="w-full bg-gray-50 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-gray-400 uppercase tracking-widest">Message</label>
                <textarea rows={5}  name="message" placeholder="How can we help you?" className="w-full bg-gray-50 px-6 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-brand-teal transition-all resize-none"></textarea>
              </div>
              <button  disabled={isSubmitting} className="w-full bg-brand-navy text-white px-10 py-5 rounded-2xl font-black hover:bg-brand-teal transition-all flex items-center justify-center gap-3 group">
                {isSubmitting ? "Sending..." : "SEND MESSAGE"} <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>

            </form>
          </motion.div>
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
                Thank you for contact with us. <br />Our team will contact you shortly.
              </p>
            </motion.div>
          )}
          
          {/* Map & Hours */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-black text-brand-navy mb-8 tracking-tight">Working Hours</h2>
              <div className="space-y-4">
                {[
                  { day: "Monday - Saturday (Morning)", hours: "10:00 AM - 01:00 PM" },
                  { day: "Monday - Saturday (Evening)", hours: "05:00 PM - 08:00 PM" },
                  { day: "Sunday", hours: "On Appointment" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center p-6 bg-gray-50 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-4">
                      <Clock className="text-brand-teal" size={20} />
                      <span className="font-bold text-brand-navy">{item.day}</span>
                    </div>
                    <span className="font-bold text-brand-teal">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="rounded-[40px] overflow-hidden shadow-xl border-8 border-white h-[350px]">

              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.7283430359194!2d76.9637059!3d28.397271899999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d3db3385e8bcd%3A0xe9da22a081399ac!2s83%20AVENUE%20-%20VLPL!5e0!3m2!1sen!2sin!4v1776192484840!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
