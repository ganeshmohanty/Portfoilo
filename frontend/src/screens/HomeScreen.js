import { Box, Link, Flex, Heading, Icon } from "@chakra-ui/react";
import { FiInstagram, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import { blackBox } from "./animation";
const BlackBox = motion(Box);

const SocialIcon = ({ children }) => {
  return (
    <Link
      h="12"
      w="12"
      bg="heading.100"
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="50%"
      m="1"
      _hover={{
        bg: "heading.200",
      }}
    >
      {children}
    </Link>
  );
};

const HomeScreen = () => {
  return (
    <>
      <BlackBox
        pos="fixed"
        zIndex="199999999999999999999"
        w="100vw"
        bg="purple.700"
        initial="initial"
        animate="animate"
        exit="exit"
        variants={blackBox}
        transition={{
          ease: "easeInOut",
          duration: 0.8,
          delay: 0.4,
        }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      />
      <Flex direction="column" justify="center" align="center" wrap="wrap">
        <Heading
          as="h1"
          mb="3"
          color="heading.100"
          fontSize={{ base: "1.5rem", sm: "3rem", md: "3rem", lg: "4rem" }}
          fontWeight="bold"
          textShadow="1px 1px white"
        >
          Ganesh Mohanty
        </Heading>
        <Heading
          as="h2"
          color="whiteAlpha.700"
          fontSize={{ lg: "2xl", md: "1xl" }}
          textShadow="1px 1px "
          letterSpacing="wide"
          fontWeight="medium"
        >
          Full Satck Javascript Devloper
        </Heading>

        <Flex
          wrap="wrap"
          direction={{ sm: "row", base: "column", md: "row", lg: "row" }}
          mt="4"
          mb="4"
        >
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/projects"
              bg="whiteAlpha.800"
              p={{
                sm: "7px 20px",
                base: "7px 20px",
                md: "10px 25px",
                lg: "10px 25px",
              }}
              borderTopLeftRadius="2em"
              borderBottomRightRadius="2em"
              w="232px"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                bg: "heading.100",
                color: "white",
              }}
            >
              My Projects
            </Link>
          </Box>
          <Box m="1rem">
            <Link
              as={RouterLink}
              to="/contact"
              bg="whiteAlpha.800"
              p={{
                sm: "7px 20px",
                base: "7px 20px",
                md: "10px 25px",
                lg: "10px 25px",
              }}
              borderTopLeftRadius="2em"
              borderBottomRightRadius="2em"
              w="232px"
              fontWeight="bold"
              textTransform="uppercase"
              textAlign="center"
              _hover={{
                textDecoration: "none",
                bg: "heading.100",
                color: "white",
              }}
            >
              Download cv
            </Link>
          </Box>
        </Flex>
        <Flex mt="1rem" wrap="wrap">
          <SocialIcon>
            <Icon
              as={FiGithub}
              fontSize={{ sm: "10px", md: "20px", lg: "20px" }}
              color="whiteAlpha.800"
            />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiLinkedin} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiInstagram} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
          <SocialIcon>
            <Icon as={FiFacebook} fontSize="20px" color="whiteAlpha.800" />
          </SocialIcon>
        </Flex>
      </Flex>
    </>
  );
};

export default HomeScreen;
