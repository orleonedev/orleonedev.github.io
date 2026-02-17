import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiCalendar, FiSend, FiMail, FiMessageSquare, FiUser, FiInfo } from 'react-icons/fi';
import { 
  FaLinkedin, 
  FaGithub, 
  FaMedium, 
  FaInstagram, 
  FaXTwitter, 
  FaDiscord, 
  FaTwitch 
} from 'react-icons/fa6';
import GlassCard from '../../components/ui/GlassCard';

const ConnectTab: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // TODO: Integrate EmailJS or another service here
    // For now, simulate a submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    
    // Reset submission status after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const schedulingLink = "https://calendar.notion.so/meet/orleonedev/wa40j4obe"; // Placeholder - user should update

  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/orleonedev', color: 'hover:text-[#0077B5]' },
    { name: 'GitHub', icon: <FaGithub size={24} />, url: 'https://github.com/orleonedev', color: 'hover:text-white' },
    { name: 'Medium', icon: <FaMedium size={24} />, url: 'https://medium.com/@orleone.dev', color: 'hover:text-white' },
    { name: 'X', icon: <FaXTwitter size={24} />, url: 'https://x.com/orleonx_dev', color: 'hover:text-white' },
    { name: 'Instagram', icon: <FaInstagram size={24} />, url: 'https://instagram.com/orleonx_dev', color: 'hover:text-[#E4405F]' },
    { name: 'Discord', icon: <FaDiscord size={24} />, url: 'discord:@orleonedev', color: 'hover:text-[#5865F2]' },
    { name: 'Twitch', icon: <FaTwitch size={24} />, url: 'https://twitch.tv/orleonx_dev', color: 'hover:text-[#9146FF]' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 md:py-24 animate-in fade-in duration-700 space-y-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Call Scheduling & Info */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Let's build something <span className="text-[#D49D3A]">extraordinary</span>.
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
              Whether you're looking for a quick consultation, a mentorship session, or want to discuss a potential commission, I'm always open to new opportunities and interesting projects.
            </p>
          </div>

          <GlassCard className="p-8 space-y-6 group">
            <div className="flex items-center gap-4 text-[#D49D3A]">
              <div className="p-3 rounded-2xl bg-[#D49D3A]/10">
                <FiCalendar size={28} />
              </div>
              <h2 className="text-2xl font-bold text-white">Schedule a Quick Call</h2>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              Book a 15-30 minute discovery call to discuss your project needs, seek technical guidance, or explore collaboration opportunities directly in my calendar.
            </p>

            <a 
              href={schedulingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#D49D3A] hover:bg-[#B38531] text-white font-bold rounded-2xl transition-all duration-300 transform group-hover:scale-[1.02] shadow-lg shadow-[#D49D3A]/20"
            >
              Book a Session <FiCalendar />
            </a>
          </GlassCard>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="p-2 rounded-lg bg-[#D49D3A]/10 text-[#D49D3A]">
                <FiInfo size={20} />
              </div>
              <div>
                <h3 className="text-white font-medium">Consultancy</h3>
                <p className="text-sm text-gray-500">iOS architecture & performance</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="p-2 rounded-lg bg-[#D49D3A]/10 text-[#D49D3A]">
                <FiMessageSquare size={20} />
              </div>
              <div>
                <h3 className="text-white font-medium">Mentorship</h3>
                <p className="text-sm text-gray-500">Career & technical growth</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-8 md:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-[#D49D3A]/5 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-2">Send a Message</h2>
              <p className="text-gray-400 mb-8">For specific inquiries or collaboration requests.</p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <FiUser size={14} /> Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D49D3A]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                      <FiMail size={14} /> Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D49D3A]/50 focus:bg-white/[0.05] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <FiInfo size={14} /> Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help?"
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D49D3A]/50 focus:bg-white/[0.05] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400 flex items-center gap-2">
                    <FiMessageSquare size={14} /> Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="w-full px-5 py-4 rounded-2xl bg-white/[0.03] border border-white/10 text-white placeholder:text-gray-600 focus:outline-none focus:border-[#D49D3A]/50 focus:bg-white/[0.05] transition-all resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || submitted}
                  className={`w-full py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all duration-300 ${
                    submitted 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/20' 
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    >
                      <FiSend />
                    </motion.div>
                  ) : submitted ? (
                    <>Message Sent!</>
                  ) : (
                    <>Send Message <FiSend /></>
                  )}
                </button>
              </form>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Social Links Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="pt-12 border-t border-white/5"
      >
        <div className="flex flex-col items-center gap-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-white">Find me on social media</h2>
            <p className="text-gray-500">Let's connect across the web</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 transition-all duration-300 hover:bg-white/[0.05] hover:border-white/10 hover:-translate-y-1 ${social.color}`}
              >
                {social.icon}
                <span className="font-medium">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ConnectTab;
