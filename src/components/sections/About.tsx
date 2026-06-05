import { Box, Chip, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HiCheckCircle } from 'react-icons/hi';
import { highlights, personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading subtitle="About Me" title="Crafting Enterprise Solutions" />

        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="right">
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 4 },
                  border: 1,
                  borderColor: 'divider',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: 4,
                    height: '100%',
                    background: 'linear-gradient(180deg, #2563eb, #4f46e5)',
                  }}
                />
                {personalInfo.aboutParagraphs.map((paragraph, index) => (
                  <Typography
                    key={index}
                    variant="body1"
                    color="text.secondary"
                    sx={{
                      lineHeight: 1.9,
                      fontSize: '1.05rem',
                      mb: index < personalInfo.aboutParagraphs.length - 1 ? 2 : 0,
                    }}
                  >
                    {paragraph}
                  </Typography>
                ))}
              </Paper>
            </ScrollReveal>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <ScrollReveal direction="left" delay={0.2}>
              <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
                Core Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
                {highlights.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Chip
                      icon={<HiCheckCircle size={16} />}
                      label={item}
                      sx={{
                        py: 2.5,
                        px: 1,
                        fontWeight: 500,
                        border: 1,
                        borderColor: 'divider',
                        bgcolor: 'background.paper',
                        '& .MuiChip-icon': { color: 'primary.main' },
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
