import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiMail, FiArrowUpRight, FiCode, FiSearch, FiUsers } from 'react-icons/fi';
import { FaLinkedin, FaGithub, FaMedium, FaXTwitter } from 'react-icons/fa6';
import GlassCard from '../../components/ui/GlassCard';
import { fadeUp, spring, stagger } from '../../lib/motion';

const CONTACT_EMAIL = 'orleone.dev@gmail.com';
const SCHEDULING_LINK = 'https://calendar.notion.so/meet/orleonedev/wa40j4obe';

const services = [
  { icon: <FiCode />, title: 'iOS development', text: 'Freelance projects, from new apps to features on existing ones' },
  { icon: <FiSearch />, title: 'Consulting & reviews', text: 'Architecture and code reviews, app audits, legacy modernisation' },
  { icon: <FiUsers />, title: 'Mentoring', text: 'Mock interviews from someone who runs real ones, code and portfolio reviews, career advice' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/orleonedev' },
  { name: 'GitHub', icon: <FaGithub />, url: 'https://github.com/orleonedev' },
  { name: 'Medium', icon: <FaMedium />, url: 'https://medium.com/@orleone.dev' },
  { name: 'X', icon: <FaXTwitter />, url: 'https://x.com/orleonx_dev' },
];

const inputClass =
  'w-full px-5 py-3.5 rounded-[18px] bg-white/[0.06] text-white placeholder:text-white/45 shadow-[inset_0_0_0_1px_rgb(255_255_255/0.12)] focus:outline-none focus:shadow-[inset_0_0_0_1.5px_var(--color-accent)] focus:bg-white/[0.09] transition-all';

const ConnectTab: React.FC = () => {
  const [form, setForm] = useState({ name: '', subject: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // No backend: compose the message in the visitor's own mail client.
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `${form.message}\n\n— ${form.name}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="py-6 md:py-10 space-y-16">
      <motion.div variants={fadeUp} className="max-w-3xl space-y-4">
        <p className="text-accent font-semibold text-xs uppercase tracking-[0.25em]">Connect</p>
        <h1 className="text-4xl md:text-6xl font-bold tracking-[-0.03em]">
          Have a project or a question? <span className="text-gradient-accent">Let's talk.</span>
        </h1>
        <p className="text-white/75 text-lg leading-relaxed">
          I take on freelance iOS projects and consulting, and offer one‑to‑one sessions for developers who
          want to grow. Book a call or drop me a line.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 md:gap-6 items-start">
        <motion.div variants={stagger} className="lg:col-span-2 space-y-4 md:space-y-6">
          <GlassCard strong className="p-7 md:p-8">
            <span className="glass-chip w-12 h-12 flex items-center justify-center text-accent text-xl mb-6">
              <FiCalendar />
            </span>
            <h2 className="text-2xl font-semibold tracking-tight mb-2">Book a call</h2>
            <p className="text-white/75 leading-relaxed mb-6">
              A short intro call to talk through your project, your app or what you'd like to work on.
            </p>
            <motion.a
              href={SCHEDULING_LINK}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={spring}
              className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-accent text-ink font-semibold hover:bg-[#f0b95e] transition-colors"
            >
              Pick a time <FiArrowUpRight />
            </motion.a>
          </GlassCard>

          <ul className="space-y-3">
            {services.map((service) => (
              <li key={service.title}>
                <GlassCard className="p-5 flex items-center gap-4" hover={false}>
                  <span className="glass-chip w-10 h-10 flex-shrink-0 flex items-center justify-center text-accent">
                    {service.icon}
                  </span>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-white/70">{service.text}</p>
                  </div>
                </GlassCard>
              </li>
            ))}
          </ul>
        </motion.div>

        <GlassCard className="lg:col-span-3 p-7 md:p-10" hover={false}>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-2">Write to me</h2>
          <p className="text-white/70 mb-8">
            This opens your email app with the message ready to send to{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent hover:underline">{CONTACT_EMAIL}</a>.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/80">Name</span>
              <input type="text" name="name" required autoComplete="name" value={form.name} onChange={handleChange} placeholder="Your name" className={inputClass} />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/80">Subject</span>
              <input type="text" name="subject" required value={form.subject} onChange={handleChange} placeholder="How can I help?" className={inputClass} />
            </label>
            <label className="block space-y-2">
              <span className="text-sm font-medium text-white/80">Message</span>
              <textarea name="message" required rows={5} value={form.message} onChange={handleChange} placeholder="Tell me about your project or what you'd like help with…" className={`${inputClass} resize-none`} />
            </label>
            <motion.button
              type="submit"
              whileTap={{ scale: 0.97 }}
              transition={spring}
              className="glass-strong !rounded-full w-full h-13 py-3.5 font-semibold flex items-center justify-center gap-2 hover:text-accent transition-colors"
            >
              <FiMail /> Compose email
            </motion.button>
          </form>
        </GlassCard>
      </div>

      <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-3">
        {socialLinks.map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            transition={spring}
            className="glass !rounded-full inline-flex items-center gap-2.5 h-12 px-5 text-white/85 hover:text-white"
          >
            <span className="text-lg">{social.icon}</span>
            <span className="font-medium">{social.name}</span>
          </motion.a>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ConnectTab;
