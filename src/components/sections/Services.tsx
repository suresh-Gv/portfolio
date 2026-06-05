import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  HiChatAlt2,
  HiCloud,
  HiCode,
  HiCog,
  HiLightningBolt,
  HiTemplate,
} from 'react-icons/hi';
import { services } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

const serviceIcons: Record<string, ReactNode> = {
  react: <HiCode size={28} />,
  architecture: <HiTemplate size={28} />,
  performance: <HiLightningBolt size={28} />,
  aws: <HiCloud size={28} />,
  api: <HiCog size={28} />,
  consulting: <HiChatAlt2 size={28} />,
};

export default function Services() {
  return (
    <Box
      id="services"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'action.hover' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Services"
          title="What I Offer"
          description="Professional services tailored for enterprise-grade software development."
        />

        <Grid container spacing={3}>
          {services.map((service, index) => (
            <Grid key={service.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ScrollReveal delay={index * 0.1}>
                <motion.div whileHover={{ y: -6, scale: 1.02 }} transition={{ duration: 0.3 }}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      height: '100%',
                      border: 1,
                      borderColor: 'divider',
                      textAlign: 'center',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: 'primary.main',
                        boxShadow: '0 12px 40px rgba(37, 99, 235, 0.12)',
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 2,
                        background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                        color: '#fff',
                      }}
                    >
                      {serviceIcons[service.icon]}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {service.description}
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
