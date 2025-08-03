import React from 'react';
import { Box, Button, Container, IconButton, TextField, Typography } from '@mui/material';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const Contact: React.FC = () => {
  return (
    <Box id="contact" sx={{ p: 4, my: 8, backgroundColor: 'background.paper' }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Typography align="center" sx={{ mb: 4 }}>
          Have a question or want to work together? Feel free to reach out.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
          <IconButton href="mailto:oreste.leone@dev.com">
            <Email />
          </IconButton>
          <IconButton href="https://github.com/orleonedev" target="_blank">
            <GitHub />
          </IconButton>
          <IconButton href="https://linkedin.com/in/oreste-leone" target="_blank">
            <LinkedIn />
          </IconButton>
        </Box>
        <Box component="form" noValidate autoComplete="off">
          <TextField fullWidth label="Name" margin="normal" />
          <TextField fullWidth label="Email" margin="normal" />
          <TextField
            fullWidth
            label="Message"
            margin="normal"
            multiline
            rows={4}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Send Message
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
