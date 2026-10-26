import type { Transition, Variants } from 'framer-motion';

export const spring: Transition = { type: 'spring', stiffness: 380, damping: 32 };
export const softSpring: Transition = { type: 'spring', stiffness: 160, damping: 24, mass: 0.9 };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: softSpring },
};

export const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Props for a container that reveals its `fadeUp` children once scrolled into view. */
export const revealOnScroll = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, margin: '-80px' },
  variants: stagger,
} as const;
