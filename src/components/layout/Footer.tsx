import { Box, Container, Divider, Grid, IconButton, Typography } from '@mui/material';
import { HiArrowUp } from 'react-icons/hi';
import { navItems, personalInfo, socialLinks } from '../../data/portfolioData';
import SocialIcons from '../common/SocialIcons';
import { scrollToSection, scrollToTop } from '../../utils/scrollTo';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        pt: 6,
        pb: 3,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 800,
                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              {personalInfo.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              {personalInfo.title} · {personalInfo.location}
            </Typography>
            <SocialIcons links={socialLinks} size="small" />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {navItems.map((item) => (
                <Typography
                  key={item.href}
                  component="button"
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: 'inherit',
                    fontSize: '0.875rem',
                    color: 'text.secondary',
                    p: 0,
                    '&:hover': { color: 'primary.main' },
                    transition: 'color 0.2s',
                  }}
                >
                  {item.label}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 2 }}>
              Connect
            </Typography>
            {socialLinks.map((link) => (
              <Typography
                key={link.name}
                component="a"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="body2"
                color="text.secondary"
                sx={{
                  display: 'block',
                  mb: 1,
                  textDecoration: 'none',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                {link.name}
              </Typography>
            ))}
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </Typography>
          <IconButton
            onClick={scrollToTop}
            aria-label="Back to top"
            sx={{
              bgcolor: 'primary.main',
              color: '#fff',
              '&:hover': { bgcolor: 'primary.dark' },
            }}
          >
            <HiArrowUp size={20} />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}
