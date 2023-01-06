export const MOTION_STATE = {
  HIDDEN: 'hidden',
  SHOW: 'show',
}

export const navVariants = {
  [MOTION_STATE.HIDDEN]: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  [MOTION_STATE.SHOW]: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};

export const slideIn = (direction, type, delay, duration) => ({
  [MOTION_STATE.HIDDEN]: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0,
  },
  [MOTION_STATE.SHOW]: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const staggerContainer = (staggerChildren, delayChildren) => ({
  [MOTION_STATE.HIDDEN]: {},
  [MOTION_STATE.SHOW]: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});

export const textVariant = (delay) => ({
  [MOTION_STATE.HIDDEN]: {
    y: 50,
    opacity: 0,
  },
  [MOTION_STATE.SHOW]: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const textContainer = {
  [MOTION_STATE.HIDDEN]: {
    opacity: 0,
  },
  [MOTION_STATE.SHOW]: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  [MOTION_STATE.HIDDEN]: {
    opacity: 0,
    y: 20,
  },
  [MOTION_STATE.SHOW]: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

export const fadeIn = (direction, type, delay, duration) => ({
  [MOTION_STATE.HIDDEN]: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0,
  },
  [MOTION_STATE.SHOW]: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const planetVariants = (direction) => ({
  [MOTION_STATE.HIDDEN]: {
    x: direction === 'left' ? '-100%' : '100%',
    rotate: 120,
  },
  [MOTION_STATE.SHOW]: {
    x: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      duration: 1.8,
      delay: 0.5,
    },
  },
});

export const zoomIn = (delay, duration) => ({
  [MOTION_STATE.HIDDEN]: {
    scale: 0,
    opacity: 0,
  },
  [MOTION_STATE.SHOW]: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'tween',
      delay,
      duration,
      ease: 'easeOut',
    },
  },
});

export const footerVariants = {
  [MOTION_STATE.HIDDEN]: {
    opacity: 0,
    y: 50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  [MOTION_STATE.SHOW]: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 0.5,
    },
  },
};
