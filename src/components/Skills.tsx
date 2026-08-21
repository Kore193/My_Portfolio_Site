import React from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Layout, Cpu, GitBranch, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming',
    icon: <Terminal className="text-primary" />,
    skills: ['Python', 'SQL'],
  },
  {
    title: 'Libraries',
    icon: <Layout className="text-secondary" />,
    skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
  },
  {
    title: 'Machine Learning',
    icon: <Cpu className="text-accent" />,
    skills: ['Regression', 'Classification', 'Clustering', 'Model Evaluation'],
  },
  {
    title: 'Visualization & BI',
    icon: <Database className="text-primary" />,
    skills: ['Power BI', 'DAX', 'Tableau', 'Excel'],
  },
  {
    title: 'Databases & Tools',
    icon: <GitBranch className="text-secondary" />,
    skills: ['MySQL', 'Git', 'GitHub', 'AWS', 'Jupyter'],
  },
  {
    title: 'Core Concepts',
    icon: <Code2 className="text-accent" />,
    skills: ['Statistics', 'EDA', 'Data Modeling', 'Data Cleaning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-black mb-4"
          >
            Technical <span className="text-gradient">Stack</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[24px] group"
            >
              <motion.div 
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.1, duration: 0.3 }}
                className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"
              >
                {category.icon}
              </motion.div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIdx) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.05 + 0.2, duration: 0.3 }}
                    className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
