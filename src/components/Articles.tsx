import React from 'react';
import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography, Button } from '@mui/material';
import { articles } from '../data/articles';
import type { Article } from '../types';

const ArticleCard: React.FC<{ article: Article }> = ({ article }) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea href={article.url} target="_blank">
        <CardMedia
          component="img"
          height="140"
          image={article.imageUrl}
          alt={article.title}
        />
        <CardContent sx={{ color: 'text.primary' }}>
          <Typography gutterBottom variant="h6" component="div">
            {article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {article.mentioned ? 'Mentioned in ' : 'Published on '} {article.platform}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const Articles: React.FC = () => {
  return (
    <Box id="articles" sx={{ p: 4, my: 16, textAlign: 'center' }}>
      <Typography variant="h4" component="h2" align="center" gutterBottom>
        Articles and Mentions
      </Typography>
      <Grid container spacing={4} sx={{ mb: 4 }}>
        {articles.map((article, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <ArticleCard article={article} />
          </Grid>
        ))}
      </Grid>
      <Button variant="outlined" href="https://medium.com/@orleone.dev" target="_blank">
        Read Articles on Medium
      </Button>
    </Box>
  );
};

export default Articles;