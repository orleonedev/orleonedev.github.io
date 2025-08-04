import React, { useState } from 'react';
import { Avatar, Box, Grid, Tab, Tabs, Typography, Chip } from '@mui/material';
import { experiences } from '../data/experience';
import { skillCategories } from '../data/skills';
import { education } from '../data/education';
import { awards } from '../data/awards';
import { aboutHighlightedText, aboutText } from '../data/about';
import { MultilineHighlightedTypography } from './MultilineHighlightedTypography';


const About: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <Box id="about" sx={{ p: 4, my: 32 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom sx={{ mb: 4 }}>
        About Me
      </Typography>
      <Grid container spacing={4} alignItems="center">
        <Grid size={{ xs: 12, md: 4 }} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Avatar
            alt="Oreste Leone"
            src="/oldPortfolioFiles/assets/img/ProfileSquaredMedium.png"
            sx={{ width: 320, height: 320 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Tabs value={tabIndex} onChange={handleTabChange} centered>
            <Tab label="About" />
            <Tab label="Experience" />
            <Tab label="Skills" />
            <Tab label="Education" />
            <Tab label="Awards" />
          </Tabs>
          <Box sx={{ p: 3, height: 512, overflowY: 'auto' }}>
            {tabIndex === 0 && <MultilineHighlightedTypography
              text={aboutText}
              highlightPhrases={aboutHighlightedText}
              highlightColor='primary.main'
              variant="body1"
            />}
            {tabIndex === 1 && (
              <Box>
                {experiences.map((exp, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" color='primary.main'>{exp.role} @ {exp.company}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{exp.duration}</Typography>
                    <Typography variant="body2">{exp.description}</Typography>
                  </Box>
                ))}
              </Box>
            )}
            {tabIndex === 2 && (
              <Box>
                {skillCategories.map((category, index) => (
                  <Box key={index} sx={{ mb: 4 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2, color: 'primary.main' }}>{category.category}</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {category.skills.map((skill, skillIndex) => (
                        <Chip label={skill} key={skillIndex} size="small" />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
            {tabIndex === 3 && (
              <Box>
                {education.map((edu, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    <Typography variant="h6" color='primary.main'>{edu.role} @ {edu.company}</Typography>
                    <Typography variant="subtitle2" color="text.secondary">{edu.duration}</Typography>
                    <Typography variant="body2">{edu.description}</Typography>
                  </Box>
                ))}
              </Box>
            )}
            {tabIndex === 4 && (
              <Box>
                {awards.map((award, index) => (
                  <Box key={index} sx={{ mb: 2 }}>
                    {award.link && (
                      <Typography variant="h6" sx={{ color: 'primary.main' }}>
                        <a href={award.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', color: 'inherit' }}>
                          {award.title}
                        </a>
                      </Typography>
                    )}
                    {!award.link && (
                      <Typography variant="h6">{award.title}</Typography>
                    )}
                    <Typography variant="subtitle2" color="text.secondary">{award.date}</Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
