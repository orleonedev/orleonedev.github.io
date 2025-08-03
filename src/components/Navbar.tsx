import React, { useState } from 'react';
import { AppBar, Toolbar, Button, useScrollTrigger, Box, Typography, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import type { Theme } from '@mui/material/styles';
import { Link as ScrollLink, scroller } from 'react-scroll';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = [
  { title: 'Home', to: 'hero' },
  { title: 'About', to: 'about' },
  { title: 'Portfolio', to: 'portfolio' },
  { title: 'Articles', to: 'articles' },
  { title: 'Contact', to: 'contact' },
];

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileLinkClick = (to: string) => {
    handleMenuClose();
    scroller.scrollTo(to, {
      spy: true,
      smooth: true,
      offset: -70,
      duration: 500,
    });
  };

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
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton sx={{ visibility: 'hidden' }}><MenuIcon /></IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
              orleone<Box component="span" sx={{ color: 'primary.main' }}>.dev</Box>
            </Typography>
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={handleMenuOpen}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              sx={{ mt: '45px' }}
            >
              {navLinks.map((link) => (
                <MenuItem key={link.title} onClick={() => handleMobileLinkClick(link.to)}>
                  {link.title}
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
          <>
            <Typography variant="h6" component="div">
              orleone<Box component="span" sx={{ color: 'primary.main' }}>.dev</Box>
            </Typography>
            <Box sx={{ ml: 'auto' }}>
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
                    '&.active': { color: 'primary.main' },
                    '&:hover': { color: 'primary.main', backgroundColor: 'transparent' }
                  }}
                >
                  {link.title}
                </Button>
              ))}
            </Box>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;