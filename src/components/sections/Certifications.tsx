import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HiAcademicCap, HiBadgeCheck, HiCloud, HiCode } from 'react-icons/hi';
import { certifications } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

const certIcons: Record<string, ReactNode> = {
  aws: <HiCloud size={32} />,
  react: <HiCode size={32} />,
  agile: <HiBadgeCheck size={32} />,
  architecture: <HiAcademicCap size={32} />,
};

export default function Certifications() {
  return (
    <Box id="certifications" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Certifications"
          title="Professional Credentials"
          description="Continuous learning and industry-recognized certifications."
        />

        <Grid container spacing={3}>
          {certifications.map((cert, index) => (
            <Grid key={cert.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <ScrollReveal delay={index * 0.1}>
                <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      textAlign: 'center',
                      border: 1,
                      borderColor: 'divider',
                      height: '100%',
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
                        mx: 'auto',
                        mb: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'action.hover',
                        color: 'primary.main',
                        border: 2,
                        borderColor: 'divider',
                        borderStyle: 'dashed',
                      }}
                    >
                      {certIcons[cert.icon]}
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
                      {cert.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                      {cert.issuer}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{
                        mt: 1,
                        display: 'inline-block',
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 1,
                        bgcolor: 'primary.main',
                        color: '#fff',
                        fontWeight: 600,
                      }}
                    >
                      {cert.year}
                    </Typography>
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
