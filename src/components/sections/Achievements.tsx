import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  HiChartBar,
  HiDeviceMobile,
  HiLightningBolt,
  HiPhone,
  HiShieldCheck,
  HiStar,
  HiTrendingUp,
} from 'react-icons/hi';
import { FaReact } from 'react-icons/fa';
import { achievements } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

const achievementIcons: Record<string, ReactNode> = {
  experience: <HiStar size={28} />,
  healthcare: <HiChartBar size={28} />,
  crm: <HiTrendingUp size={28} />,
  mobile: <HiDeviceMobile size={28} />,
  security: <HiShieldCheck size={28} />,
  shield: <HiShieldCheck size={28} />,
  reactnative: <FaReact size={28} />,
  optimization: <HiLightningBolt size={28} />,
  api: <HiChartBar size={28} />,
  communication: <HiPhone size={28} />,
};

export default function Achievements() {
  return (
    <Box id="achievements" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Achievements"
          title="Key Accomplishments"
          description="Measurable impact across healthcare, security, performance, and enterprise delivery."
        />

        <Grid container spacing={3}>
          {achievements.map((item, index) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
              <ScrollReveal delay={index * 0.08}>
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
                        width: 56,
                        height: 56,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 2,
                        background: 'linear-gradient(135deg, rgba(37,99,235,0.1), rgba(79,70,229,0.1))',
                        color: 'primary.main',
                      }}
                    >
                      {achievementIcons[item.icon]}
                    </Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 700 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.7 }}>
                      {item.description}
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
