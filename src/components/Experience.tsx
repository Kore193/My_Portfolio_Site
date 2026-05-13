import React from 'react';
import { motion } from 'motion/react';
import { Award, Target, Rocket, BookOpen, Trophy, Star } from 'lucide-react';

const experiences = [
  {
    title: 'Android Development Intern',
    organization: 'Quiz App Project',
    period: 'Internship',
    description: 'Developed a native Android application using Java and Android Studio. Improved app performance and usability, securing 1st position among 10+ teams. Designed a clean and user-friendly interface.',
    icon: <Rocket className="text-primary" />,
  },
  {
    title: 'B.Tech in Computer Science and Engineering',
    organization: 'Fabtech College of Engineering',
    period: 'Expected: 2026',
    description: 'Currently pursuing B.Tech with a CGPA of 8.18. Focusing on software development, AI, and data analytics.',
    icon: <BookOpen className="text-secondary" />,
  },
  {
    title: 'Diploma in Computer Technology',
    organization: 'Brahmedev Mane Polytechnic',
    period: '2023',
    description: 'Completed diploma with 75.89%. Built strong foundational knowledge in computer science and programming.',
    icon: <Target className="text-accent" />,
  },
];

const goals = [
  {
    title: 'Hackathon Participant',
    description: 'Participated in hackathons at SKN College & Fabtech College (2025).',
    icon: <Trophy className="text-primary" />,
  },
  {
    title: '1st Position in Android Quiz App',
    description: 'Secured 1st position in the Android Quiz App competition among 10+ teams.',
    icon: <Award className="text-secondary" />,
  },
  {
    title: 'Barclays Soft Skills Program',
    description: 'Successfully completed the Barclays Soft Skills Development Program (2023).',
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
                "Aspiring Data Analyst passionate about extracting insights from data and solving real-world problems. 
                Experienced in building machine learning models and data-driven web applications."
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
