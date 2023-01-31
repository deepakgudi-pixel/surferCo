export const textFadeInOut = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.7,
    },
  },
};

export const videoPopOut = {
  animate: {
    opacity: 1,
    scale: 1,
    transition: { ease: [0.6, 0.01, 0.05, 0.95], duration: 1 },
  },
  initial: { opacity: 0, scale: 0 },
};

export const staggerdChildren = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1,
    },
  },
};

export const wordsAnimation = {
  initial: {
    y: 100,
  },
  animate: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 1,
    },
  },
};
