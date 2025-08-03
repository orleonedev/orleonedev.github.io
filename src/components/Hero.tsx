import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn, Mail } from '@mui/icons-material';
import { FaMedium } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <Box
      id="hero"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        p: 4,
      }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          Hi 👋, I'm <Box component="span" sx={{ color: 'primary.main' }}>Oreste Leone</Box>
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          iOS Engineer and Indie Game Developer
        </Typography>
        <Box sx={{ my: 4 }}>
          <IconButton href="https://www.linkedin.com/in/orleonedev" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton href="https://github.com/orleonedev" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://medium.com/@orleone.dev" target="_blank">
            <FaMedium />
          </IconButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;