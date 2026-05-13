import React from 'react';
import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold text-gradient mb-2">Sushant Kore</p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-text-dim">
            Building the future, one line of code at a time.
          </p>
        </div>

        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-text-dim">
          Made with <Heart size={12} className="text-primary fill-primary" /> by Sushant Kore &copy; {currentYear}
        </div>

        
      </div>
    </footer>
  );
}
