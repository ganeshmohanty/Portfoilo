import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";
import { blackBox } from "./animation";
const BlackBox = motion(Box);
const AboutScreen = () => {
  return (
    <>
      <BlackBox
        pos="fixed"
        zIndex="199999999999999999999"
        w="100vw"
        bg="green.700"
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
      <h1>this is a about page </h1>
    </>
  );
};

export default AboutScreen;
