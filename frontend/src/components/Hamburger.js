import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";
const Navbox = motion(Box);

const Hamburger = ({ isOpen, setIsOpen }) => {
  return (
    <Navbox h="80px" w="80px" pos="fixed" zIndex="199999999999">
      <Flex
        display={{ base: "flex", md: "none", sm: "flex" }}
        onClick={() => {
          setIsOpen(!isOpen);
        }}
        float="right"
        bg="gray.300"
        h="56px"
        w="56px"
        borderRadius="56px"
        direction="column"
        justifyContent="center"
        alignItems="center"
        cursor="pointer"
        m="3"
      >
        <Navbox
          w="30px"
          bg="black"
          mb="1"
          h="0.5"
          animate={{
            rotate: isOpen ? 45 : 0,
            translateY: isOpen ? 5 : 0,
          }}
        />
        <Navbox
          w="30px"
          bg="black"
          mb="1"
          h="0.5"
          animate={{ scale: isOpen ? 0 : 1 }}
          transformOrigin="center"
        />
        <Navbox
          w="30px"
          bg="black"
          mb="1"
          h="0.5"
          animate={{
            rotate: isOpen ? -45 : 0,
            translateY: isOpen ? -6 : 0,
          }}
        />

        <title>Menu</title>
      </Flex>
    </Navbox>
  );
};

export default Hamburger;
