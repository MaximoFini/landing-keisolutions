/**
 * Optimized Framer Motion imports
 * Only loads features we actually use to reduce bundle size
 */
import { domAnimation, LazyMotion } from "framer-motion"

export { domAnimation, LazyMotion }
export { motion, useInView, AnimatePresence } from "framer-motion"

// Reusable animation variants
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 0.5, delay },
  }),
}

export const slideIn = {
  hidden: { opacity: 0, x: -30 },
  visible: (delay = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay },
  }),
}
