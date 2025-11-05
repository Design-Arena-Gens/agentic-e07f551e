'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <main className="relative min-h-screen bg-[#0a0a0f] overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-cyan-600/20 animate-gradient" />
      </div>

      {/* Grid background */}
      <div className="fixed inset-0 grid-background opacity-20" />

      {/* Interactive glow effect following cursor */}
      <motion.div
        className="fixed w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.15) 0%, transparent 70%)',
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        animate={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Navigation */}
      <nav className="relative z-50 flex items-center justify-between px-8 py-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold"
        >
          <span className="text-gradient">Workflow</span>
          <span className="text-white">AI</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-8"
        >
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Product</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Enterprise</a>
          <a href="#" className="text-gray-300 hover:text-white transition-colors">Docs</a>
          <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all">
            Get Started
          </button>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 max-w-7xl mx-auto px-8 pt-20 pb-32"
      >
        {/* Floating data nodes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="text-center space-y-8 relative">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full"
          >
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray-300">Trusted by Fortune 500 Enterprises</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-7xl md:text-8xl font-bold leading-tight"
          >
            <div className="text-white mb-2">Transform Enterprise</div>
            <div className="text-gradient">Data Into Intelligence</div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Convert unstructured proprietary data into workflow intelligence for AI agents and multimodal AI.
            Power next-generation enterprise automation with context-aware systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center justify-center gap-4 pt-4"
          >
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all overflow-hidden">
              <span className="relative z-10">Request Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white font-semibold text-lg hover:bg-white/10 transition-all">
              View Documentation
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex items-center justify-center gap-12 pt-12 text-sm"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">10M+</div>
              <div className="text-gray-500 mt-1">Documents Processed</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">99.9%</div>
              <div className="text-gray-500 mt-1">Uptime SLA</div>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient">85%</div>
              <div className="text-gray-500 mt-1">Faster Workflows</div>
            </div>
          </motion.div>
        </div>

        {/* Interactive visualization */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative mt-24"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Central hub */}
            <div className="relative flex items-center justify-center">
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="relative w-48 h-48 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 glow-purple flex items-center justify-center"
              >
                <div className="w-40 h-40 rounded-full bg-[#0a0a0f] flex items-center justify-center">
                  <svg className="w-16 h-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                </div>
              </motion.div>

              {/* Orbiting data sources */}
              {[
                { label: 'PDFs', angle: 0, color: 'purple', icon: '📄' },
                { label: 'APIs', angle: 60, color: 'blue', icon: '🔌' },
                { label: 'Databases', angle: 120, color: 'cyan', icon: '🗄️' },
                { label: 'Emails', angle: 180, color: 'purple', icon: '✉️' },
                { label: 'Documents', angle: 240, color: 'blue', icon: '📝' },
                { label: 'Media', angle: 300, color: 'cyan', icon: '🎬' },
              ].map((item, i) => {
                const radius = 280;
                const angle = (item.angle * Math.PI) / 180;
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                    }}
                    animate={{
                      x: x,
                      y: y,
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear",
                      delay: i * 0.3,
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br from-${item.color}-600/20 to-${item.color}-800/20 backdrop-blur-sm border border-${item.color}-500/30 flex flex-col items-center justify-center gap-1 cursor-pointer hover:border-${item.color}-400/50 transition-all`}
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-xs text-gray-400">{item.label}</span>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>

            {/* Connection lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: -1 }}>
              <defs>
                <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="rgba(147, 51, 234, 0.5)" />
                  <stop offset="100%" stopColor="rgba(59, 130, 246, 0.5)" />
                </linearGradient>
              </defs>
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const radius = 280;
                const x = 50 + Math.cos(angle) * (radius / 10);
                const y = 50 + Math.sin(angle) * (radius / 10);

                return (
                  <motion.line
                    key={i}
                    x1="50%"
                    y1="50%"
                    x2={`${x}%`}
                    y2={`${y}%`}
                    stroke="url(#line-gradient)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ duration: 2, delay: i * 0.2 }}
                  />
                );
              })}
            </svg>
          </div>
        </motion.div>
      </motion.div>

      {/* Features Preview Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-32"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Multimodal Processing',
              description: 'Extract insights from text, images, audio, and video with unified AI models',
              icon: '🧠',
              gradient: 'from-purple-600/10 to-purple-800/10',
              border: 'border-purple-500/20',
            },
            {
              title: 'Agent Orchestration',
              description: 'Deploy autonomous AI agents that understand your enterprise workflows',
              icon: '🤖',
              gradient: 'from-blue-600/10 to-blue-800/10',
              border: 'border-blue-500/20',
            },
            {
              title: 'Real-time Intelligence',
              description: 'Live workflow analytics and predictive insights for enterprise operations',
              icon: '⚡',
              gradient: 'from-cyan-600/10 to-cyan-800/10',
              border: 'border-cyan-500/20',
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} backdrop-blur-sm border ${feature.border} hover:border-opacity-50 transition-all cursor-pointer group`}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trusted by section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-8 pb-24 text-center"
      >
        <div className="text-sm text-gray-500 uppercase tracking-wider mb-8">Trusted by industry leaders</div>
        <div className="flex items-center justify-center gap-12 opacity-40">
          {['Enterprise A', 'Company B', 'Corp C', 'Startup D', 'Tech E'].map((company, i) => (
            <div key={i} className="text-2xl font-bold text-white">{company}</div>
          ))}
        </div>
      </motion.div>
    </main>
  );
}
