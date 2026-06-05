import { Box, Button, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import { HiDesktopComputer } from 'react-icons/hi';
import { projects } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

export default function Projects() {
  return (
    <Box
      id="projects"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'action.hover' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Projects"
          title="Featured Work"
          description="Enterprise applications built with modern technologies and scalable architectures."
        />

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid key={project.id} size={{ xs: 12, md: 4 }}>
              <ScrollReveal delay={index * 0.15}>
                <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      border: 1,
                      borderColor: 'divider',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 16px 48px rgba(37, 99, 235, 0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        height: 180,
                        background: project.gradient,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          inset: 0,
                          opacity: 0.1,
                          backgroundImage:
                            'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)',
                          backgroundSize: '12px 12px',
                        }}
                      />
                      <HiDesktopComputer size={64} color="rgba(255,255,255,0.9)" />
                      <Typography
                        variant="caption"
                        sx={{
                          position: 'absolute',
                          bottom: 8,
                          right: 12,
                          color: 'rgba(255,255,255,0.7)',
                          fontWeight: 500,
                        }}
                      >
                        Screenshot Placeholder
                      </Typography>
                    </Box>

                    <Box sx={{ p: 3, flex: 1, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7, flex: 1 }}>
                        {project.description}
                      </Typography>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75, mb: 2 }}>
                        {project.technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            size="small"
                            sx={{
                              bgcolor: 'action.hover',
                              fontWeight: 500,
                              fontSize: '0.75rem',
                            }}
                          />
                        ))}
                      </Box>

                      <Box sx={{ mb: 2 }}>
                        {project.features.map((feature) => (
                          <Typography
                            key={feature}
                            variant="caption"
                            color="text.secondary"
                            sx={{ display: 'block', mb: 0.5 }}
                          >
                            • {feature}
                          </Typography>
                        ))}
                      </Box>

                      <Box sx={{ display: 'flex', gap: 1.5, mt: 'auto' }}>
                        <Button
                          component="a"
                          variant="contained"
                          size="small"
                          startIcon={<FaExternalLinkAlt size={12} />}
                          href={project.demoUrl ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ flex: 1 }}
                        >
                          Demo
                        </Button>
                        <Button
                          component="a"
                          variant="outlined"
                          size="small"
                          startIcon={<FaGithub size={14} />}
                          href={project.githubUrl ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{ flex: 1 }}
                        >
                          GitHub
                        </Button>
                      </Box>
                    </Box>
                  </Paper>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
