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
const PageAnimation = ({ color, mode }) => {
  return (
    <>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "#000",
          transformOrigin: "left",
          zIndex: 9999999,
          backgroundColor: "red",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ scaleX: 1 }}
        transition={{ duration: 1 }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          width: "100%",
          height: "100%",
          background: "#000",
          transformOrigin: "right",
          zIndex: 9999999999,
          backgroundColor: "green",
        }}
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0 }}
        transition={{ duration: 0.3 }}
        exit={{ scaleX: 0 }}
        transition={{ duration: 1 }}
      />
    </>
  );
};

const PageAnimationSecond = ({ color }) => {
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

export { PageAnimation, PageAnimationSecond };
