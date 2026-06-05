import { Box, Container, Grid, LinearProgress, Paper, Typography } from '@mui/material';
import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
  HiChip,
  HiCloud,
  HiCode,
  HiDatabase,
  HiServer,
} from 'react-icons/hi';
import { skillCategories } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

const categoryIcons: Record<string, ReactNode> = {
  frontend: <HiCode size={24} />,
  backend: <HiServer size={24} />,
  cloud: <HiCloud size={24} />,
  database: <HiDatabase size={24} />,
  tools: <HiChip size={24} />,
};

function SkillBar({ name, proficiency, delay }: { name: string; proficiency: number; delay: number }) {
  return (
    <Box sx={{ mb: 2.5 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          {name}
        </Typography>
        <Typography variant="caption" color="text.secondary">
          {proficiency}%
        </Typography>
      </Box>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay }}
      >
        <LinearProgress
          variant="determinate"
          value={proficiency}
          sx={{
            height: 8,
            borderRadius: 4,
            bgcolor: 'action.hover',
            '& .MuiLinearProgress-bar': {
              borderRadius: 4,
              background: 'linear-gradient(90deg, #2563eb, #4f46e5)',
            },
          }}
        />
      </motion.div>
    </Box>
  );
}

export default function Skills() {
  return (
    <Box
      id="skills"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'action.hover' }}
    >
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Skills"
          title="Technical Proficiency"
          description="A comprehensive toolkit built over 10+ years of enterprise development."
        />

        <Grid container spacing={3}>
          {skillCategories.map((category, catIndex) => (
            <Grid key={category.title} size={{ xs: 12, sm: 6, lg: 4 }}>
              <ScrollReveal delay={catIndex * 0.1}>
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
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                      <Box
                        sx={{
                          p: 1.2,
                          borderRadius: 2,
                          bgcolor: 'primary.main',
                          color: '#fff',
                          display: 'flex',
                        }}
                      >
                        {categoryIcons[category.icon]}
                      </Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {category.title}
                      </Typography>
                    </Box>
                    {category.skills.map((skill, skillIndex) => (
                      <SkillBar
                        key={skill.name}
                        name={skill.name}
                        proficiency={skill.proficiency}
                        delay={catIndex * 0.1 + skillIndex * 0.05}
                      />
                    ))}
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
