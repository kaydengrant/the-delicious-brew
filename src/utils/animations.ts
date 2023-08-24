import { Variants, easeIn } from 'framer-motion';

const loadingContainerAnim: Variants = {
  hidden: { y: 0 },
  show: {
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'mirror',
      type: 'Spring',
    },
  },
};

const loadingSteamContainerAnim: Variants = {
  show: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const loadingSteamAnim: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
      repeat: Infinity,
      repeatType: 'mirror',
      repeatDelay: 1,
    },
  },
};

const heroCarouselAnim: Variants = {
  hidden: {
    x: -100,
  },
  show: {
    x: 0,
  },
};

const navBarExtendedAnim: Variants = {
  hidden: {
    y: -400,
  },
  show: {
    y: 0,
    transition: {
      ease: easeIn,
      duration: 0.4,
    },
  },
};

const navBarMobileAnim: Variants = {
  hidden: {
    x: 400,
  },
  show: {
    x: 0,
    transition: {
      ease: easeIn,
      duration: 0.4,
    },
  },
};

export {
  loadingContainerAnim,
  loadingSteamContainerAnim,
  loadingSteamAnim,
  heroCarouselAnim,
  navBarExtendedAnim,
  navBarMobileAnim,
};
