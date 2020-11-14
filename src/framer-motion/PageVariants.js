import { useSpring } from "framer-motion";

export const PageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
  downInitial: {
    opacity: 0,
    y: "-100%",
  },
  downIn: {
    opacity: 1,
    y: 0,
  },
  downOut: {
    opacity: 0,
  },
};

export const ComeDown = {
  initial: {
    opacity: 0,
    y: "-25%",
  },
  in: {
    opacity: 1,
    y: "0",
  },
};

export const PageTransitions = {
  default: {
    duration: 0.3,
  },
  down: {
    ease: "easeIn",
    type: "spring",
    duration: 0.5,
    delayChildren: 0.5,
    staggerChildren: 0.2,
  },
  portfolio: {
    ease: "easeIn",
    type: "spring",
    duration: 1,
    delayChildren: 1,
    staggerChildren: 0.4,
  },
  landing: {
    duration: 0.3,
    delayChildren: 0.5,
    staggerChildren: 1,
  },
  about: {
    duration: 1,
    delayChildre: 1,
    staggerChildren: 0.5,
  },
};

export const FadeIn = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  transitions: {
    duration: 0.5,
    delayChildren: 0.3,
    ease: "easeIn",
  },
};

export const Scale = {
  initial: {
    opacity: 0,
    scale: 0.2,
  },
  in: {
    opacity: 1,
    scale: 1,
  },
};

export const ComeUp = {
  initial: {
    opacity: 0,
    y: "50%",
  },
  in: {
    opacity: 1,
    y: 0,
  },
};
