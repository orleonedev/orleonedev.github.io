import React, { useState } from 'react';
import { Avatar, Box, Grid, Tab, Tabs, Typography, Chip } from '@mui/material';
import { experiences } from '../data/experience';
import { skills } from '../data/skills';

const About: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box id="about" sx={{ p: 4, my: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt="Oreste Leone"
            src="/oldPortfolioFiles/assets/img/ProfileSquaredMedium.png"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="About" />
            <Tab label="Experience" />
            <Tab label="Skills" />
            <Tab label="Education" />
          </Tabs>
          <Box sx={{ p: 3, minHeight: 250, overflowY: 'auto' }}>
            {tabIndex === 0 && <Typography>A passionate developer with a love for creating intuitive applications and immersive games. I thrive on challenges and am always eager to learn new technologies.</Typography>}
            {tabIndex === 1 && (
              <Box>
                {experiences.map((exp, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6">{exp.role} at {exp.company}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{exp.duration}</Typography>
                    <Typography variant="body2">{exp.description}</Typography>
                  </Box>
                ))}
              </Box>
            )}
            {tabIndex === 2 && (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                {skills.map((skill) => (
                  <Chip label={skill.name} key={skill.name} />
                ))}
              </Box>
            )}
            {tabIndex === 3 && <Typography>Placeholder for Education/Certifications.</Typography>}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
