import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Rocket, BookOpen, Trophy, Star } from 'lucide-react';

const experiences = [
  {
    title: 'Data Analyst Intern',
    organization: 'Cloudblitz Technologies, Pune',
    period: 'Feb 2026 - Present',
    description: 'Worked on a live project "Real-Time E-commerce Sales Trends Analytics Dashboard". Developed interactive dashboards for monitoring sales trends using real-time data. Gained hands-on experience in data collection, ETL pipelines, and data cleaning.',
    icon: <Rocket className="text-primary" />,
  },
  {
    title: 'B.Tech in Computer Science Engineering',
    organization: 'Fabtech College of Engineering, Sangola',
    period: '2023 - 2026',
    description: 'Focusing on software development, AI, and data analytics.',
    icon: <BookOpen className="text-secondary" />,
  },
];

const goals = [
  {
    title: 'Data Analytics Certificate',
    description: 'Successfully completed Data Analytics certification from Udemy.',
    icon: <Trophy className="text-primary" />,
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    description: 'Certified in AI Fundamentals by IBM.',
    icon: <Award className="text-secondary" />,
  },
  {
    title: 'Hackathon Participant',
    description: 'Participated in hackathons at SKN College & Fabtech College (2025).',
    icon: <Star className="text-accent" />,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24">
          {/* Experience Timeline */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black mb-12 text-center"
            >
              Work & <span className="text-gradient">Experience</span>
            </motion.h2>
            
            <div className="space-y-12 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-white/10">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-16"
                >
                  <div className="absolute left-0 top-0 w-12 h-12 rounded-xl glass flex items-center justify-center z-10">
                    {exp.icon}
                  </div>
                  <span className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase mb-2 block">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-text-dim mb-4">{exp.organization}</p>
                  <p className="text-text-dim text-sm leading-relaxed">{exp.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Goals & Achievements */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-black mb-12 text-center"
            >
              Key <span className="text-gradient">Achievements</span>
            </motion.h2>

            <div className="grid gap-6">
              {goals.map((goal, idx) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 rounded-[24px] glass flex gap-6 items-start"
                >
                  <div className="p-4 rounded-xl bg-white/5">
                    {goal.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{goal.title}</h3>
                    <p className="text-text-dim text-xs leading-relaxed">{goal.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 p-8 rounded-[32px] glass border-primary/20"
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="dot-indicator" />
                Career Objective
              </h3>
              <p className="text-text-dim text-sm italic leading-relaxed">
                "B.Tech Computer Science graduate with hands-on experience in Python, SQL, Power BI, Excel, and data visualization. Skilled in data cleaning, EDA, statistics, and developing data-driven projects to generate actionable insights. Seeking an entry-level Data Analyst role to apply my analytical and problem-solving skills."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
