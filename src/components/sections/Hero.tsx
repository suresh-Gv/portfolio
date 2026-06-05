import { Avatar, Box, Button, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HiDownload, HiMail } from 'react-icons/hi';
import { personalInfo, socialLinks, stats } from '../../data/portfolioData';
import AnimatedCounter from '../common/AnimatedCounter';
import ScrollReveal from '../common/ScrollReveal';
import SocialIcons from '../common/SocialIcons';
import { scrollToSection } from '../../utils/scrollTo';

const statIcons: Record<string, string> = {
  experience: '🏆',
  projects: '🚀',
  enterprise: '🏢',
  expert: '⚡',
};

export default function Hero() {
  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        pt: 10,
        pb: 6,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(37, 99, 235, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 20%, rgba(79, 70, 229, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 60% 80%, rgba(96, 165, 250, 0.1) 0%, transparent 50%)',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          top: '10%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(37,99,235,0.2), rgba(79,70,229,0.1))',
          filter: 'blur(60px)',
          zIndex: 0,
        }}
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '10%',
          width: 250,
          height: 250,
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(79,70,229,0.15), rgba(37,99,235,0.1))',
          filter: 'blur(50px)',
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal>
              <Typography
                variant="overline"
                sx={{ color: 'primary.main', fontWeight: 700, letterSpacing: 2 }}
              >
                Welcome to my portfolio
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  fontWeight: 800,
                  mt: 1,
                  mb: 1,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.75rem' },
                  lineHeight: 1.1,
                }}
              >
                Hi, I'm{' '}
                <Box
                  component="span"
                  sx={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {personalInfo.name}
                </Box>
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <Typography
                variant="h5"
                color="text.secondary"
                sx={{ fontWeight: 500, mb: 2, fontSize: { xs: '1.1rem', md: '1.35rem' } }}
              >
                {personalInfo.title}
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, maxWidth: 540, lineHeight: 1.8, fontSize: '1.05rem' }}
              >
                {personalInfo.tagline}
              </Typography>
            </ScrollReveal>
            <ScrollReveal delay={0.4}>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 3 }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<HiDownload size={20} />}
                  href={personalInfo.resumeUrl}
                  download
                >
                  Download Resume
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<HiMail size={20} />}
                  onClick={() => scrollToSection('#contact')}
                  sx={{
                    borderColor: 'primary.main',
                    color: 'primary.main',
                    '&:hover': { borderColor: 'primary.dark', bgcolor: 'rgba(37,99,235,0.04)' },
                  }}
                >
                  Contact Me
                </Button>
              </Box>
            </ScrollReveal>
            <ScrollReveal delay={0.5}>
              <SocialIcons links={socialLinks} />
            </ScrollReveal>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="left" delay={0.2}>
              <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Avatar
                    sx={{
                      width: { xs: 220, md: 280 },
                      height: { xs: 220, md: 280 },
                      background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                      fontSize: { xs: '4rem', md: '5rem' },
                      fontWeight: 700,
                      boxShadow: '0 20px 60px rgba(37, 99, 235, 0.3)',
                      border: '4px solid',
                      borderColor: 'background.paper',
                    }}
                  >
                    SK
                  </Avatar>
                </motion.div>
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>

        <ScrollReveal delay={0.6}>
          <Grid container spacing={2} sx={{ mt: { xs: 4, md: 8 } }}>
            {stats.map((stat) => (
              <Grid key={stat.label} size={{ xs: 6, md: 3 }}>
                <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.2 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 2, md: 3 },
                      textAlign: 'center',
                      border: 1,
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 32px rgba(37, 99, 235, 0.12)',
                      },
                    }}
                  >
                    <Typography sx={{ fontSize: '1.5rem', mb: 1 }}>
                      {statIcons[stat.icon]}
                    </Typography>
                    <AnimatedCounter value={stat.value} label={stat.label} />
                  </Paper>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
