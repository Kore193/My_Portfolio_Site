import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowError(false);

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = data.get('name') as string;
    const email = data.get('email') as string;
    const message = data.get('message') as string;

    try {
      const response = await fetch('https://formsubmit.co/ajax/koresushant193@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New contact form submission from ${name}`,
        })
      });

      if (response.ok) {
        setShowSuccess(true);
        form.reset();
        
        // Hide popup after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      } else {
        setShowError(true);
        setTimeout(() => setShowError(false), 5000);
      }
    } catch (error) {
      console.error(error);
      setShowError(true);
      setTimeout(() => setShowError(false), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 bg-background-dark/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6 leading-tight">
              Building real-world solutions<br />
              using <span className="text-secondary">AI & Data.</span>
            </h2>
            <p className="text-text-dim text-lg mb-10 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Mail size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Email</p>
                  <a href="mailto:koresushant193@gmail.com" className="text-lg text-white hover:text-primary transition-colors">
                    koresushant193@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Linkedin size={24} className="text-secondary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">LinkedIn</p>
                  <a href="https://www.linkedin.com/in/sushant-kore" target="_blank" rel="noreferrer" className="text-lg text-white hover:text-secondary transition-colors">
                    sushant-kore
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="dot-indicator ml-5" />
                <div className="ml-1">
                  <p className="text-[10px] font-bold text-text-dim uppercase tracking-[0.2em]">Location</p>
                  <p className="text-lg text-white">Pune, Maharashtra</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[32px] glass relative overflow-hidden"
          >
            <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter Your Name"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter Your Email"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-text-dim ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Write Your Message Here..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none text-sm"
                />
              </div>
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-xs rounded-xl flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 relative disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Sending... <Loader2 size={18} className="animate-spin" /></>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>

            <AnimatePresence>
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-[32px] border border-primary/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary"
                  >
                    <CheckCircle2 size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-2">Message Sent Successfully!</h3>
                  <p className="text-text-dim text-sm max-w-[250px]">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                </motion.div>
              )}

              {showError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[#0a0a0a]/95 backdrop-blur-2xl rounded-[32px] border border-red-500/20"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5 }}
                    className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center mb-6 text-red-500"
                  >
                    <AlertCircle size={40} />
                  </motion.div>
                  <h3 className="text-2xl font-black text-white mb-2">Something went wrong!</h3>
                  <p className="text-text-dim text-sm max-w-[250px]">
                    Unable to send your message. Please try again later.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
