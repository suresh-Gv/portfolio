import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBookOpen } from 'react-icons/hi';
import { education, personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

const eduIcons: Record<string, ReactNode> = {
  masters: <HiAcademicCap size={32} />,
  bachelors: <HiBookOpen size={32} />,
};

export default function Education() {
  return (
    <Box id="education" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Education"
          title="Academic Background"
          description="Formal education in computer science and applications."
        />

        <Grid container spacing={3}>
          {education.map((item, index) => (
            <Grid key={item.degree} size={{ xs: 12, md: 6 }}>
              <ScrollReveal delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: 1,
                      borderColor: 'divider',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 12px 40px rgba(37, 99, 235, 0.1)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 72,
                        height: 72,
                        borderRadius: 2,
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'action.hover',
                        color: 'primary.main',
                      }}
                    >
                      {eduIcons[item.icon]}
                    </Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {item.degree}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {item.institution}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {item.location}
                    </Typography>
                  </Paper>
                </motion.div>
              </ScrollReveal>
            </Grid>
          ))}
        </Grid>

        <ScrollReveal delay={0.2}>
          <Box sx={{ mt: 4, textAlign: 'center' }}>
            <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1.5 }}>
              Languages
            </Typography>
            <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
              {personalInfo.languages.map((lang) => (
                <Typography
                  key={lang}
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 2,
                    border: 1,
                    borderColor: 'divider',
                    fontWeight: 500,
                  }}
                >
                  {lang}
                </Typography>
              ))}
            </Box>
          </Box>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
