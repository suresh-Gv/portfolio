import { Box, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HiBriefcase } from 'react-icons/hi';
import { experience } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

export default function Experience() {
  return (
    <Box id="experience" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <SectionHeading
          subtitle="Experience"
          title="Professional Journey"
          description="A decade of building and leading enterprise software solutions."
        />

        <Box sx={{ position: 'relative', pl: { xs: 3, md: 4 } }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 8, md: 12 },
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, #2563eb, #4f46e5, transparent)',
            }}
          />

          {experience.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.15}>
              <Box sx={{ position: 'relative', mb: 4 }}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: -20, md: -28 },
                      top: 24,
                      width: 16,
                      height: 16,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      border: 3,
                      borderColor: 'background.default',
                      boxShadow: '0 0 0 4px rgba(37, 99, 235, 0.2)',
                    }}
                  />
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3, md: 4 },
                      ml: { xs: 2, md: 3 },
                      border: 1,
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 8px 32px rgba(37, 99, 235, 0.1)',
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: 'action.hover',
                          color: 'primary.main',
                          display: { xs: 'none', sm: 'flex' },
                        }}
                      >
                        <HiBriefcase size={24} />
                      </Box>
                      <Box>
                        <Typography variant="h5" sx={{ fontWeight: 700 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="primary.main" sx={{ mt: 0.5, fontWeight: 600 }}>
                          {item.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Box component="ul" sx={{ m: 0, pl: 2.5 }}>
                      {item.responsibilities.map((resp) => (
                        <Typography
                          key={resp}
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1, lineHeight: 1.7 }}
                        >
                          {resp}
                        </Typography>
                      ))}
                    </Box>
                  </Paper>
                </motion.div>
              </Box>
            </ScrollReveal>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
