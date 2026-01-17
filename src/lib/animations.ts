/* ============================================================
   ANIMATION UTILITIES
   Shared animation variants for framer-motion.
   Premium, Apple-like easing and transitions.
   ============================================================ */

import type { Variants, Transition } from "framer-motion";

/* Premium easing curve - Apple-like smooth deceleration */
export const premiumEase: Transition["ease"] = [0.25, 0.46, 0.45, 0.94] as const;

/* Standard easing */
export const standardEase: Transition["ease"] = "easeOut";

/* Container variants - staggered children reveal */
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

/* Fade up variants for list items */
export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

/* Fade in from left */
export const fadeLeftVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

/* Scale in variants */
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

/* Stagger container with custom timing */
export const createStaggerContainer = (
  staggerChildren: number = 0.1,
  delayChildren: number = 0.2
): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

/* Create fade up with custom duration */
export const createFadeUp = (duration: number = 0.6): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
    },
  },
});
