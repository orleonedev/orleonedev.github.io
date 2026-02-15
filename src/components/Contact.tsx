import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaMedium, FaInstagram, FaTwitter, FaDiscord, FaTwitch } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <div id="contact" className="p-8 my-32 bg-[#161B22]">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">
          Contact Me
        </h2>
        <p className="text-center text-gray-400 mb-12">
          Have a question or want to work together? Feel free to reach out.
        </p>
        
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {[
            { icon: <FaEnvelope size={20} />, href: "mailto:orleone.dev@gmail.com" },
            { icon: <FaGithub size={20} />, href: "https://github.com/orleonedev" },
            { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/orleonedev" },
            { icon: <FaMedium size={20} />, href: "https://medium.com/@orleone.dev" },
            { icon: <FaInstagram size={20} />, href: "https://instagram.com/orleonx_dev" },
            { icon: <FaTwitter size={20} />, href: "http://twitter.com/orleonx_dev" },
            { icon: <FaDiscord size={20} />, href: "discord:OresteLeone#1681" },
            { icon: <FaTwitch size={20} />, href: "https://twitch.tv/orleonx_dev" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-800 text-gray-400 hover:text-[#D49D3A] hover:bg-gray-700 transition-all"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <form className="space-y-4" noValidate autoComplete="off">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Name</label>
            <input 
              type="text" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#D49D3A] transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Email</label>
            <input 
              type="email" 
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#D49D3A] transition-colors"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-1">Message</label>
            <textarea 
              rows={4}
              className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-white focus:outline-none focus:border-[#D49D3A] transition-colors"
              placeholder="Your Message"
            />
          </div>
          <button 
            type="submit"
            className="w-full bg-[#D49D3A] text-black font-bold py-3 rounded-md hover:bg-[#D49D3A]/90 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;