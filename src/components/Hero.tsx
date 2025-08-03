import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';
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
          Oreste Leone
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          iOS Engineer & Game Developer
        </Typography>
        <Typography variant="body1" sx={{ maxWidth: '600px', my: 2 }}>
          Welcome to my portfolio. I specialize in creating beautiful and functional mobile applications and engaging games.
        </Typography>
        <Box>
          <IconButton href="https://github.com/orleonedev" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/oreste-leone" target="_blank">
            <LinkedIn />
          </IconButton>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Hero;
