import { Typography } from '@mui/material';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  label: string;
}

function parseValue(value: string): { number: number; suffix: string; prefix: string } {
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  if (!match) return { prefix: '', number: 0, suffix: value };
  return { prefix: match[1], number: parseInt(match[2], 10), suffix: match[3] };
}

export default function AnimatedCounter({ value, label }: AnimatedCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const { prefix, number, suffix } = parseValue(value);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isInView && number > 0) {
      motionValue.set(number);
    }
  }, [isInView, motionValue, number]);

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => {
      if (displayRef.current) {
        displayRef.current.textContent = `${prefix}${Math.round(latest)}${suffix}`;
      }
    });
    return unsubscribe;
  }, [spring, prefix, suffix]);

  return (
    <motion.div ref={ref}>
      <Typography
        variant="h4"
        component="p"
        sx={{
          fontWeight: 800,
          background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontSize: { xs: '1.5rem', md: '2rem' },
        }}
      >
        {number > 0 ? (
          <span ref={displayRef}>
            {prefix}0{suffix}
          </span>
        ) : (
          value
        )}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, fontWeight: 500 }}>
        {label}
      </Typography>
    </motion.div>
  );
}
