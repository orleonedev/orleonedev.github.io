import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, Chip, Box, IconButton } from '@mui/material';
import { GitHub, Link as LinkIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const MotionCard = motion(Card);

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <MotionCard
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <CardMedia
        component="img"
        height="140"
        image={project.image}
        alt={project.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Box sx={{ my: 1 }}>
          {project.tags.map((tag) => (
            <Chip label={tag} key={tag} size="small" sx={{ mr: 0.5, mb: 0.5 }} />
          ))}
        </Box>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={Link} to={`/project/${project.id}`} size="small">View Details</Button>
        {project.gitHubUrl && (
          <IconButton href={project.gitHubUrl} target="_blank" size="small">
            <GitHub />
          </IconButton>
        )}
        {project.websiteUrl && (
          <IconButton href={project.websiteUrl} target="_blank" size="small">
            <LinkIcon />
          </IconButton>
        )}
      </CardActions>
    </MotionCard>
  );
};

export default ProjectCard;