import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { HiDocumentText, HiDownload, HiEye } from 'react-icons/hi';
import { personalInfo } from '../../data/portfolioData';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';

export default function Resume() {
  return (
    <Box
      id="resume"
      component="section"
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'action.hover' }}
    >
      <Container maxWidth="md">
        <SectionHeading
          subtitle="Resume"
          title="Download My Resume"
          description="Get a detailed overview of my experience, skills, and accomplishments."
        />

        <ScrollReveal>
          <motion.div whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
            <Paper
              elevation={0}
              sx={{
                p: { xs: 4, md: 6 },
                textAlign: 'center',
                border: 1,
                borderColor: 'divider',
                background:
                  'linear-gradient(135deg, rgba(37,99,235,0.05) 0%, rgba(79,70,229,0.05) 100%)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -40,
                  right: -40,
                  width: 160,
                  height: 160,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, rgba(37,99,235,0.1), transparent)',
                }}
              />
              <Box
                sx={{
                  width: 80,
                  height: 80,
                  borderRadius: 3,
                  mx: 'auto',
                  mb: 3,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                  color: '#fff',
                }}
              >
                <HiDocumentText size={40} />
              </Box>
              <Typography variant="h5" sx={{ mb: 1, fontWeight: 700 }}>
                {personalInfo.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Senior Software Engineer · {personalInfo.location}
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4, maxWidth: 480, mx: 'auto' }}>
                Comprehensive overview of 10+ years in enterprise software engineering, including
                technical skills, project highlights, and professional achievements.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
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
                  startIcon={<HiEye size={20} />}
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Resume
                </Button>
              </Box>
            </Paper>
          </motion.div>
        </ScrollReveal>
      </Container>
    </Box>
  );
}
