import React from 'react';
import { motion } from 'motion/react';
import { PageHeader } from '../components/PageHeader';
import {
  ShieldCheck,
  Database,
  Settings,
  Lock,
  Share2,
  Baby,
  Mail,
  RefreshCw,
  ArrowRight,
} from 'lucide-react';

const sections = [
  {
    icon: Database,
    title: 'Information We Collect',
    iconWrapClass: 'bg-brand-teal/10 text-brand-teal',
    content: (
      <ul className="space-y-3">
        {[
          'Name',
          'Mobile Number',
          'Appointment Details',
          'Information voluntarily submitted through appointment booking forms',
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <ArrowRight size={16} className="text-brand-teal mt-1.5 shrink-0" />
            <span className="text-gray-500 leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    icon: Settings,
    title: 'How We Use Information',
    iconWrapClass: 'bg-brand-orange/10 text-brand-orange',
    content: (
      <>
        <p className="text-gray-500 leading-relaxed mb-4">We use the information to:</p>
        <ul className="space-y-3">
          {[
            'Schedule and manage appointments',
            'Contact patients regarding appointments',
            'Improve our services',
            'Respond to patient enquiries',
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <ArrowRight size={16} className="text-brand-orange mt-1.5 shrink-0" />
              <span className="text-gray-500 leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    icon: Lock,
    title: 'Data Security',
    iconWrapClass: 'bg-brand-teal/10 text-brand-teal',
    content: (
      <p className="text-gray-500 leading-relaxed">
        We take reasonable measures to protect personal information from unauthorized access, disclosure, or misuse.
      </p>
    ),
  },
  {
    icon: Share2,
    title: 'Third-Party Services',
    iconWrapClass: 'bg-brand-orange/10 text-brand-orange',
    content: (
      <p className="text-gray-500 leading-relaxed">
        The app may use third-party services such as WhatsApp, phone dialer, website links, and social media platforms.
      </p>
    ),
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    iconWrapClass: 'bg-brand-teal/10 text-brand-teal',
    content: (
      <p className="text-gray-500 leading-relaxed">
        Our services are not directed toward children under 13 years of age without parental supervision.
      </p>
    ),
  },
  {
    icon: RefreshCw,
    title: 'Updates',
    iconWrapClass: 'bg-brand-orange/10 text-brand-orange',
    content: (
      <p className="text-gray-500 leading-relaxed">
        This Privacy Policy may be updated from time to time.
      </p>
    ),
  },
];

export const Privacy = () => {
  return (
    <div className="bg-white">
      <PageHeader
        title="Privacy Policy"
        subtitle="Dental & Health values your privacy and is committed to protecting your personal information."
      />

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-16 p-8 rounded-3xl bg-brand-teal/5 border border-brand-teal/10"
          >
            <div className="w-14 h-14 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
              <ShieldCheck size={28} />
            </div>
            <p className="text-gray-500 leading-relaxed">
              Dental &amp; Health values your privacy and is committed to protecting your personal information.
            </p>
          </motion.div>

          <div className="space-y-10">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (index % 3) * 0.1 }}
                className="card-shadow p-8 sm:p-10 rounded-3xl border border-gray-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${section.iconWrapClass}`}>
                    <section.icon size={26} />
                  </div>
                  <h2 className="text-2xl font-black text-brand-navy tracking-tight">{section.title}</h2>
                </div>
                {section.content}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
