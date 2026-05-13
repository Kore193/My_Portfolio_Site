import React from 'react';
import { motion } from 'motion/react';
import { Github, ExternalLink, Brain, BarChart3, Globe, Code, ShoppingCart, Users } from 'lucide-react';

const projects = [
  {
    title: 'Pomegranate Fruit Disease Detection',
    description: 'An image classification model built to identify diseases in pomegranate fruits using computer vision and the ResNet34 architecture.',
    tech: ['Roboflow', 'ResNet34', 'HTML', 'CSS', 'JavaScript'],
    features: [
      'Collected and managed dataset using Roboflow',
      'Image preprocessing and labeling',
      'Trained and evaluated using Roboflow pipeline',
      'Integrated model output into a web interface'
    ],
    github: 'https://github.com/Kore193/Pomoguard_Project',
    image: '/pomegranate-app.png',
    icon: <Brain className="text-primary" />,
    featured: true,
  },
  {
    title: 'Netflix Data Analysis',
    description: 'Analyzes Netflix dataset to uncover insights on content types, top-producing countries, genres, ratings, and platform growth using Python.',
    tech: ['Python', 'Pandas', 'Seaborn', 'Matplotlib'],
    features: [
      'Data cleaning and preprocessing',
      'Content and genre trend analysis',
      'Growth metrics visualization',
      'Actionable business insights'
    ],
    github: 'https://github.com/Kore193/Netflix-Data-Analysis',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    icon: <BarChart3 className="text-secondary" />,
    featured: false,
  },
  {
    title: 'E-commerce Store',
    description: 'A responsive and interactive E-commerce store application featuring a product catalog and shopping cart functionality.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'Dynamic product catalog',
      'Interactive shopping cart',
      'Responsive user interface',
      'Clean and modern design'
    ],
    github: 'https://github.com/Kore193/E-commerce_Store',
    image: 'https://plus.unsplash.com/premium_photo-1683887064106-531532ecdf20?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8',
    icon: <ShoppingCart className="text-accent" />,
    featured: false,
  },
  {
    title: 'Social Media Platform',
    description: 'A simple social media platform allowing users to connect, share content, and interact with a dynamic feed.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    features: [
      'User profile management',
      'Interactive content feed',
      'Responsive layout',
      'Modern UI components'
    ],
    github: 'https://github.com/Kore193/Social_Media_Platform',
    image: 'https://plus.unsplash.com/premium_photo-1684179641331-e89c6320b6a9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    icon: <Users className="text-primary" />,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black mb-4 mx-auto"
            >
              My <span className="text-gradient">Projects</span>
            </motion.h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-1 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "group relative grid md:grid-cols-2 gap-8 items-center p-8 rounded-[32px] glass transition-all overflow-hidden",
                project.featured && "border-primary/30"
              )}
            >
              <div className="relative aspect-video rounded-2xl overflow-hidden glass">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <div className="flex gap-4">
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-3 bg-white text-black rounded-full hover:bg-primary hover:text-white transition-all">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    {project.icon}
                  </div>
                  {project.featured && (
                    <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-primary text-white rounded-full">
                      AI/ML
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-dim mb-6 leading-relaxed text-sm">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-8">
                  {project.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-xs text-gray-300">
                      <div className="dot-indicator !w-1.5 !h-1.5" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/10 rounded-full text-text-dim">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { cn } from '@/src/lib/utils';
