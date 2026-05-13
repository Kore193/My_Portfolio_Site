import React from 'react';
import { motion } from 'motion/react';
import Typewriter from 'typewriter-effect';
import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass p-12 md:p-20 rounded-[32px]"
        >
          <span className="inline-block px-4 py-1.5 mb-8 text-[10px] font-bold tracking-[0.2em] uppercase bg-white/5 border border-white/10 rounded-full text-primary">
            <span className="dot-indicator inline-block mr-2 align-middle" />
            Available for Internships
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-[-0.03em] leading-[1.1] text-white">
            Building real-world solutions<br />
            using <span className="text-secondary">AI & Data.</span>
          </h1>
          
          <div className="text-lg md:text-2xl font-mono text-primary mb-10 h-8">
            <Typewriter
              options={{
                strings: [
                  'I am a Data Analyst',
                  'AI/ML Enthusiast',
                  'Problem Solver_'
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
                cursor: '',
              }}
            />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
            >
              View Projects <ArrowRight size={18} />
            </motion.a>
            <motion.a
              href="/Sushant_Kore_Resume.pdf"
              download="Sushant_Kore_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-8 py-4 glass text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-white/10 transition-all"
            >
              Download My Resume <Download size={18} />
            </motion.a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
