import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Github, Linkedin, Mail, Briefcase } from 'lucide-react';
import { cn } from '@/src/lib/utils';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navLinks.map(link => link.href.substring(1));
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        scrolled ? 'glass border-b' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gradient"
        >
          Sushant Kore
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center bg-white/5 border border-white/10 rounded-full px-2 py-1.5 backdrop-blur-md">
          {navLinks.map((link, i) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={cn(
                  "relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-full z-10",
                  isActive ? "text-white" : "text-text-dim hover:text-white"
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-primary/80 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                {link.name}
              </motion.a>
            );
          })}
        </div>
        
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="https://github.com/Kore193" target="_blank" rel="noreferrer" className="text-text-dim hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:border-white/20">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/sushant-kore" target="_blank" rel="noreferrer" className="text-text-dim hover:text-white transition-colors bg-white/5 p-2 rounded-full border border-white/10 hover:border-white/20">
            <Linkedin size={18} />
          </a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex px-5 py-2.5 bg-primary text-white text-[10px] font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 items-center gap-2"
          >
            Hire Me <Briefcase size={14} />
          </motion.a>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-gray-400 hover:text-white p-2 bg-white/5 rounded-full border border-white/10 ml-1" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl relative z-50"
          >
            <div className="flex flex-col space-y-2 p-6">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-sm font-bold uppercase tracking-widest transition-all p-4 rounded-xl text-center",
                      isActive ? "bg-primary text-white" : "text-white/80 hover:text-white hover:bg-white/10 border border-transparent"
                    )}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
