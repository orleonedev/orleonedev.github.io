import React from 'react';
import { AppBar, Toolbar, Button, useScrollTrigger, Box } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';

const navLinks = [
  { title: 'About', to: 'about' },
  { title: 'Portfolio', to: 'portfolio' },
  { title: 'Articles', to: 'articles' },
  { title: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: trigger ? 'rgba(22, 27, 34, 0.85)' : 'transparent',
        backdropFilter: trigger ? 'blur(8px)' : 'none',
        borderBottom: '1px solid',
        borderColor: trigger ? 'divider' : 'transparent',
        transition: 'background-color 0.3s, border-color 0.3s',
      }}
    >
      <Toolbar sx={{ justifyContent: 'center' }}>
        <Box>
          {navLinks.map((link) => (
            <Button
              key={link.title}
              component={ScrollLink}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              color="inherit"
              sx={{
                color: 'text.primary',
                '&.active': {
                  color: 'primary.main',
                },
                '&:hover': {
                  color: 'primary.main',
                  backgroundColor: 'transparent'
                }
              }}
            >
              {link.title}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
