import React from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Articles from '../components/Articles';
import Contact from '../components/Contact';

const Section: React.FC<{ children: React.ReactNode, id: string }> = ({ children, id }) => (
  <motion.div
    id={id}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
  >
    {children}
  </motion.div>
);

const MainPage: React.FC = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Section id="about"><About /></Section>
      <Section id="portfolio"><Portfolio /></Section>
      <Section id="articles"><Articles /></Section>
      <Section id="contact"><Contact /></Section>
    </Box>
  );
};

export default MainPage;
