import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <Box id="portfolio" sx={{ p: 4, my: 8 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {featuredProjects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
