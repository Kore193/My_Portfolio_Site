import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, GraduationCap, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-background-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative aspect-square rounded-[32px] overflow-hidden glass-sidebar">
                <img
                  src="https://github.com/Kore193.png"
                  alt="Sushant Kore"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Stats Overlay */}
              <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl border-white/10 shadow-2xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="text-3xl font-black text-primary">Final</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-dim leading-tight">Year B.Tech<br />CSE Student</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass p-10 rounded-[32px]"
          >
            <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-text-dim mb-4 flex items-center gap-2">
              <span className="w-8 h-px bg-primary" />
              About Me
            </div>
            <h2 className="text-4xl font-black mb-6">
              Sushant <span className="text-gradient">Kore</span>
            </h2>
            <p className="text-text-dim text-lg mb-8 leading-relaxed">
              I am an aspiring Data Analyst with strong foundations in Python, SQL, and data visualization. 
              Experienced in building machine learning models and data-driven web applications. 
              I am passionate about extracting insights from data and solving real-world problems.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="dot-indicator" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Location</h4>
                  <p className="text-sm text-white">Pune, Maharashtra</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="dot-indicator" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Education</h4>
                  <p className="text-sm text-white">B.Tech CSE (CGPA: 8.18)</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="dot-indicator" />
                <div>
                  <h4 className="text-[10px] font-bold uppercase tracking-widest text-text-dim">Hobbies</h4>
                  <p className="text-sm text-white">Cricket & Badminton</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Let's Talk 
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from 'lucide-react';
