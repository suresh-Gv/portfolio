import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { useState, type FormEvent } from 'react';
import { HiLocationMarker, HiMail, HiPaperAirplane, HiPhone } from 'react-icons/hi';
import { personalInfo, socialLinks } from '../../data/portfolioData';
import type { ContactFormData } from '../../types';
import ScrollReveal from '../common/ScrollReveal';
import SectionHeading from '../common/SectionHeading';
import SocialIcons from '../common/SocialIcons';

const initialForm: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactFormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          subtitle="Contact"
          title="Get In Touch"
          description="Have a project in mind or want to discuss opportunities? I'd love to hear from you."
        />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <ScrollReveal direction="right">
              <Paper elevation={0} sx={{ p: 4, border: 1, borderColor: 'divider', height: '100%' }}>
                <Typography variant="h6" sx={{ mb: 3, fontWeight: 700 }}>
                  Contact Information
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      color: 'primary.main',
                      display: 'flex',
                    }}
                  >
                    <HiLocationMarker size={22} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Location
                    </Typography>
                    <Typography variant="body1" sx={{ fontWeight: 500 }}>
                      {personalInfo.location}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      color: 'primary.main',
                      display: 'flex',
                    }}
                  >
                    <HiMail size={22} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Email
                    </Typography>
                    <Typography
                      component="a"
                      href={`mailto:${personalInfo.email}`}
                      variant="body1"
                      sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 500 }}
                    >
                      {personalInfo.email}
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
                  <Box
                    sx={{
                      p: 1.5,
                      borderRadius: 2,
                      bgcolor: 'action.hover',
                      color: 'primary.main',
                      display: 'flex',
                    }}
                  >
                    <HiPhone size={22} />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="text.secondary">
                      Phone
                    </Typography>
                    <Typography
                      component="a"
                      href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                      variant="body1"
                      sx={{ color: 'primary.main', textDecoration: 'none', fontWeight: 500 }}
                    >
                      {personalInfo.phone}
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="subtitle2" sx={{ mb: 1.5, fontWeight: 600 }}>
                  Connect with me
                </Typography>
                <SocialIcons links={socialLinks} />
              </Paper>
            </ScrollReveal>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <ScrollReveal direction="left" delay={0.2}>
              <Paper
                component="form"
                onSubmit={handleSubmit}
                elevation={0}
                sx={{ p: 4, border: 1, borderColor: 'divider' }}
              >
                {submitted && (
                  <Alert severity="success" sx={{ mb: 3 }}>
                    Thank you for your message! I'll get back to you soon.
                  </Alert>
                )}
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Name"
                      required
                      value={form.name}
                      onChange={handleChange('name')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="Email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange('email')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Subject"
                      required
                      value={form.subject}
                      onChange={handleChange('subject')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="Message"
                      required
                      multiline
                      rows={5}
                      value={form.message}
                      onChange={handleChange('message')}
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      size="large"
                      startIcon={<HiPaperAirplane size={18} />}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </ScrollReveal>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
