import { motion, type Variants } from 'framer-motion';
import type { ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const getVariants = (direction: ScrollRevealProps['direction']): Variants => {
  const offset = 40;
  const map = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
  };
  const initial = map[direction ?? 'up'];
  return {
    hidden: { opacity: 0, ...initial },
    visible: { opacity: 1, x: 0, y: 0 },
  };
};

export default function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className,
}: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={getVariants(direction)}
    >
      {children}
    </motion.div>
  );
}
