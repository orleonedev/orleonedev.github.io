import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

const Portfolio: React.FC = () => {

  return (
    <Box id="portfolio" sx={{ p: 4, my: 32 }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Portfolio
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={project.id}>
            <ProjectCard project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
