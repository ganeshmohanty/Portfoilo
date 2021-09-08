import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
const BlackBox = motion(Box);

export const blackBox = {
  initial: {
    height: "100vh",
    opacity: 1,
    bottom: 0,
  },
  animate: {
    height: 0,
    opacity: 0.7,
  },
  exit: {
    height: "100vh",
    opacity: 1,
  },
};
const PageAnimation = ({ color }) => {
  return (
    <BlackBox
      pos="fixed"
      zIndex="199999999999999999999"
      w="100vw"
      bg={color}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={blackBox}
      transition={{
        ease: "easeInOut",
        duration: 0.8,
        delay: 0.4,
      }}
    />
  );
};

export default PageAnimation;
