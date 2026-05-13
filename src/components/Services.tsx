import React from 'react';
import { motion } from 'motion/react';
import { Laptop, BrainCircuit, BarChart3, CheckCircle2 } from 'lucide-react';

const services = [
  {
    title: 'Website Development',
    description: 'Creating modern, responsive, and SEO-friendly websites for small businesses and personal brands.',
    icon: <Laptop className="text-primary" />,
    features: ['Responsive Design', 'SEO Optimization', 'Modern UI/UX', 'Performance Focused'],
  },
  {
    title: 'AI-based Solutions',
    description: 'Developing custom AI models for classification, detection, and data analysis using cutting-edge tools.',
    icon: <BrainCircuit className="text-secondary" />,
    features: ['Model Training', 'Data Processing', 'Real-time Detection', 'Custom Datasets'],
  },
  {
    title: 'Data Analyst',
    description: 'Extracting meaningful insights from complex datasets using statistical methods and visualization tools.',
    icon: <BarChart3 className="text-accent" />,
    features: ['Data Cleaning', 'Statistical Analysis', 'Data Visualization', 'Actionable Insights'],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            My <span className="text-gradient">Learnings</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-[32px] glass flex flex-col h-full"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
              <p className="text-text-dim text-sm mb-8 flex-grow leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                    <div className="dot-indicator !w-1.5 !h-1.5" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
