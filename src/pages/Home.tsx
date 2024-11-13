import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { CardSection } from '@/components/CardSection';
import { useTheme } from '@emotion/react';

const useStyles = makeStyles({
  heroBanner: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'url(https://picsum.photos/1600/900)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff',
    height: '80vh',
    textAlign: 'center',
    padding: '0 20px',
  },
  heroContent: {
    maxWidth: '700px',
  },
  featureSection: {
    padding: '50px 0',
  },
  featureItem: {
    textAlign: 'center',
    padding: '20px',
  },
  ctaSection: {
    color: '#fff',
    padding: '50px 0',
    textAlign: 'center',
  },
});

export const Home: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Hero Banner */}
      <Box className={classes.heroBanner}>
        <Box className={classes.heroContent}>
          <Typography variant='h2' gutterBottom>
            ArenaStrats
          </Typography>
          <Typography variant='h5'>
            Master your arena strategy with real-time insights on positioning,
            kill windows, and cooldown management. Become the top contender in
            every match.
          </Typography>
          <Button variant='contained' color='secondary' size='large'>
            Get Started
          </Button>
        </Box>
      </Box>
      <CardSection />
    </div>
  );
};
