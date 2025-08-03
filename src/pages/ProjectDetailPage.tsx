import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/projects';
import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import NotFoundPage from './NotFoundPage';

const ProjectDetailPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projects.find((p) => p.id === projectId);

  if (!project) {
    return <NotFoundPage />;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Button component={Link} to="/" variant="contained" sx={{ mb: 4 }}>
        Back to Home
      </Button>
      <Card>
        <CardMedia
          component="img"
          height="400"
          image={project.image}
          alt={project.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h3" component="div">
            {project.title}
          </Typography>
          <Box sx={{ my: 2 }}>
            {project.tags.map((tag) => (
              <Chip label={tag} key={tag} sx={{ mr: 1 }} />
            ))}
          </Box>
          <Typography variant="body1" color="text.secondary">
            {project.description}
          </Typography>
          <Box sx={{ mt: 3 }}>
            {project.appStoreUrl && <Button variant="outlined" href={project.appStoreUrl} target="_blank" sx={{ mr: 1 }}>App Store</Button>}
            {project.gitHubUrl && <Button variant="outlined" href={project.gitHubUrl} target="_blank" sx={{ mr: 1 }}>GitHub</Button>}
            {project.websiteUrl && <Button variant="outlined" href={project.websiteUrl} target="_blank">Website</Button>}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProjectDetailPage;