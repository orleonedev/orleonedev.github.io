import React, { useContext } from 'react';
import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardActions,
  Container,
  FormControlLabel,
  Grid,
  IconButton,
  Paper,
  Slider,
  Stack,
  Switch,
  TextField,
  Toolbar,
  Typography,
  useTheme,
} from '@mui/material';
import { Brightness4, Brightness7, Favorite } from '@mui/icons-material';

export default function ThemeShowcase() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* App Bar with Theme Toggle */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Theme Showcase
          </Typography>
          <Typography variant="body2" sx={{ mr: 1 }}>
            {theme.palette.mode === 'dark' ? 'Dark' : 'Light'} Mode
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Grid container spacing={4}>
          {/* Column 1: Typography & Buttons */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
              <Typography variant="h4" gutterBottom>Typography</Typography>
              <Typography variant="h1" sx={{ fontSize: '2.5rem' }}>h1 Heading</Typography>
              <Typography variant="h2" sx={{ fontSize: '2rem' }}>h2 Heading</Typography>
              <Typography variant="h3" sx={{ fontSize: '1.75rem' }}>h3 Heading</Typography>
              <Typography variant="h4" sx={{ fontSize: '1.5rem' }}>h4 Heading</Typography>
              <Typography variant="subtitle1">Subtitle 1: A little less important.</Typography>
              <Typography variant="body1" paragraph>
                Body 1: This is the default text size. Your primary color is{' '}
                <span style={{ color: theme.palette.primary.main, fontWeight: 'bold' }}>{theme.palette.primary.main}</span>.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Body 2 (secondary text): Used for less important information and captions.
              </Typography>
            </Paper>

            <Paper elevation={2} sx={{ p: 3 }}>
              <Typography variant="h4" gutterBottom>Buttons</Typography>
              <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
                <Button variant="contained">Primary</Button>
                <Button variant="contained" color="secondary">Secondary</Button>
                <Button variant="outlined">Outlined</Button>
                <Button variant="text">Text</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" startIcon={<Favorite />}>Icon</Button>
              </Stack>
            </Paper>
          </Grid>

          {/* Column 2: Cards & Form Elements */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Card elevation={2} sx={{ mb: 4 }}>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Example Card
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Cards use the "paper" background color. This is a great way to group related content and actions.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">Share</Button>
                <Button size="small" color="secondary">Learn More</Button>
              </CardActions>
            </Card>

            <Paper elevation={2} sx={{ p: 3 }}>
                <Typography variant="h4" gutterBottom>Form Controls</Typography>
                <Stack spacing={3}>
                    <TextField id="name" label="Full Name" variant="outlined" fullWidth />
                    <TextField id="email" label="Email Address" variant="filled" fullWidth />
                    <TextField id="bio" label="Bio" variant="standard" fullWidth />
                    <FormControlLabel control={<Switch defaultChecked color="primary" />} label="Primary Switch" />
                    <FormControlLabel control={<Switch color="secondary" />} label="Secondary Switch" />
                    <Box>
                        <Typography gutterBottom>Volume Slider</Typography>
                        <Slider defaultValue={30} aria-label="Volume slider" valueLabelDisplay="auto" />
                    </Box>
                </Stack>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
