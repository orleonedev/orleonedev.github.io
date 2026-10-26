import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import profilePic from '../../assets/images/profile_pic_squared.jpg';
import GlassCard from '../ui/GlassCard';
import { pickSocials } from '../../data/socials';
import { fadeUp, spring, stagger } from '../../lib/motion';

const socials = pickSocials(['linkedin', 'github', 'medium']);

const stats = [
  { value: '15M+', label: 'downloads across the Lapse trilogy' },
  { value: '2×', label: 'Apple Swift Student Challenge winner' },
  { value: '2017', label: 'shipping mobile products since' },
];

const AboutHero: React.FC = () => (
  <motion.section
    initial="hidden"
    animate="visible"
    variants={stagger}
    className="min-h-[calc(100dvh-10rem)] flex flex-col items-center justify-center text-center py-10"
  >
    <motion.div variants={fadeUp} className="mb-5">
      <div className="glass-strong !rounded-full p-1.5">
        <img
          src={profilePic}
          alt="Oreste Leone"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full object-cover"
        />
      </div>
    </motion.div>

    <motion.p variants={fadeUp} className="text-lg font-medium text-white/70 mb-4">
      Oreste Leone
    </motion.p>

    <motion.h1 variants={fadeUp} className="font-bold tracking-[-0.04em] mb-6">
      <span className="block text-5xl sm:text-6xl md:text-8xl leading-[0.95]">iOS Engineer.</span>
      <span className="block mt-2 md:mt-3 text-3xl sm:text-4xl md:text-6xl leading-[1.05] text-balance text-gradient-accent">
        Apps, and the work around them.
      </span>
    </motion.h1>

    <motion.p variants={fadeUp} className="max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed mb-10">
      I build iOS apps used every day across multiple brands, and look after everything around them —
      from analysis and planning to releases and monitoring. Available for freelance projects, consulting
      and one‑to‑one mentoring.
    </motion.p>

    <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-3 mb-14">
      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.96 }} transition={spring}>
        <Link
          to="/connect"
          className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-ink font-semibold hover:bg-[#f0b95e] transition-colors"
        >
          Get in touch <FiArrowRight />
        </Link>
      </motion.div>
      {socials.map((social) => (
        <motion.a
          key={social.id}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={spring}
          className="glass !rounded-full w-12 h-12 flex items-center justify-center text-xl text-white/85 hover:text-white"
        >
          {social.icon}
        </motion.a>
      ))}
    </motion.div>

    <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 w-full max-w-3xl">
      {stats.map((stat) => (
        <GlassCard key={stat.value} className="px-6 py-5 text-left sm:text-center" hover={false}>
          <p className="text-3xl md:text-4xl font-bold tracking-tight">{stat.value}</p>
          <p className="text-sm text-white/70 mt-1">{stat.label}</p>
        </GlassCard>
      ))}
    </motion.div>
  </motion.section>
);

export default AboutHero;
