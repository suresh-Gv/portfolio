import { Fab, Zoom, useScrollTrigger } from '@mui/material';
import { HiArrowUp } from 'react-icons/hi';
import { scrollToTop } from '../../utils/scrollTo';

export default function BackToTop() {
  const trigger = useScrollTrigger({ threshold: 400, disableHysteresis: true });

  return (
    <Zoom in={trigger}>
      <Fab
        onClick={scrollToTop}
        aria-label="Back to top"
        size="medium"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000,
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          color: '#fff',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #4338ca 100%)',
          },
        }}
      >
        <HiArrowUp size={22} />
      </Fab>
    </Zoom>
  );
}
