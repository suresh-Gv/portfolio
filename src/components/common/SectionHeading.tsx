import { Box, Typography } from '@mui/material';
import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  subtitle: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = 'center',
}: SectionHeadingProps) {
  return (
    <ScrollReveal>
      <Box sx={{ textAlign: align, mb: { xs: 4, md: 6 } }}>
        <Typography
          variant="overline"
          sx={{
            color: 'primary.main',
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: '0.75rem',
          }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            mt: 1,
            mb: description ? 2 : 0,
            fontSize: { xs: '1.75rem', md: '2.25rem' },
          }}
        >
          {title}
        </Typography>
        {description && (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 600, mx: align === 'center' ? 'auto' : 0 }}
          >
            {description}
          </Typography>
        )}
      </Box>
    </ScrollReveal>
  );
}
